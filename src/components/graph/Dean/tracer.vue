<template>

    <v-chart class="chart" :option="option" autoresize />

</template>

<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
import axios from 'axios';
import { useCookies } from "vue3-cookies";
use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

provide(THEME_KEY, 'white');

export default{
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    
    data() {
        return {
            option: {
                color: [
                    "#124076",
                    "#7F9F80",
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    // type: 'category',
                    // data: []
                },
                series: [
                    {
                        name: 'Takers',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: 'Passers',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            },

            data: [
                {
                    in_campus: "",
                    in_department: "",
                },
            ],
            
            reportData:[],
            programs:[],
            takers:[],
            passers:[],
            exam_date:2023,
            dimensions: ['program', 'Employed', 'Unemployed', 'Not Tracked'],
        }
    },

    components:{
        VChart
    },

    methods:{
        async FetchData(position, campus_id , user_id) {
            try {
                const response = await axios
                    .post(import.meta.env.VITE_API_HEP_TWO_REPORT, {
                        // position: position,
                        campus_id: campus_id,
                        user_id: user_id,
                        // exam_date: this.exam_date,


                    })
                    .then((response) => {

                        this.reportData = response.data;

                            // const  option = {
                            //   legend: {},
                            //   tooltip: {},
                            //      orient: 'horizontal',
                            //   dataset: {
                            //     // program: ['BS Ed' ,'BS Eng', 'BS Acc'],
                            //     // datalist:[{'Employed':32,'Unemployed':32,'Not Tracked':'32'}],
                            //     dimensions: ['program', 'Employed', 'Unemployed', 'Not Tracked'],
                            //     source: [
                            //       { program: 'BS Ed', 'Employed': 43.3, 'Unemployed': 85.8, 'Not Tracked': 93.7 },
                            //       { program: 'BS Eng', 'Employed': 83.1, 'Unemployed': 73.4, 'Not Tracked': 55.1 },
                            //       { program: 'BS Acc', 'Employed': 86.4, 'Unemployed': 65.2, 'Not Tracked': 82.5 },
                            //       { program: 'Walnut Brownie', 'BS Ed': 72.4, 'Unemployed': 53.9, 'Not Tracked': 39.1 }
                            //     ]
                            //   },
                            //   xAxis: { type: 'category' },
                            //   yAxis: {},
                            //   // Declare several bar series, each will be mapped
                            //   // to a column of dataset.source by default.
                            //   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
                            // };


                        this.college = [...new Set(this.reportData.map(item => item.college))]; 
                        this.count = [...new Set(this.reportData.map(item => item.graduate_tracer_status_count))];
                        this.status = [...new Set(this.reportData.map(item => item.graduate_tracer_status))];
                        // console.log( JSON.stringify(this.reportData))

                        // if (response.data == "Successfully HEP added!"){
                        //     this.isDataActive = false;
                        // }

                        this.option.yAxis.data = this.programs
                        this.option.series[0].data = this.status
                        this.option.series[1].data = this.count
                    })
                    .catch((error) => {
                        console.error("Error fetching hep data", error);
                    })

                    .finally(() => {

                    });
            } catch (error) { }
        }
    },

    mounted(){  
        let userCookies = this.cookies.get("userCookies");
        let accesstoken = this.cookies.get("userAccessToken");
        let userPosition = this.cookies.get("userPosition");
        let userCollege = this.cookies.get("userCollege");
        let userCampus = this.cookies.get("userCampus");
        this.user = userPosition;
        this.userCookies = userCookies;
        this.data[0].in_campus = userCampus;
        this.data[0].in_department = userCollege;

        if (this.user == null && this.userCookies == null) {
            this.$router.push("/");
        }
        this.userposition = userCookies["position"]
        this.userCampus = userCookies["campus_id"]
        this.userID = userCookies["id"]

        // this.fetchProgram_Data(userCookies["college_id"]);
        this.FetchData(userCookies["position"], userCookies["campus_id"], userCookies["id"]);
    }

}






</script>

<style scoped>
.chart {
    height: 50vh;
    width: 100%;

}
</style>