a<template>

    <v-chart class="chart" :option="option" autoresize />

</template>

<script >
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

import { onMounted } from 'vue'
import axios from 'axios';
import { useCookies } from "vue3-cookies";


use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);


const sampleData=[]
const position=0;
const campus=0;
const user_id=0;

// For Calling
async function  FetchData(position, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_HEPLIST, {
            position: position,
            campus_id: campus,
            user_id: user_id,


          })
          .then((response) => {
        
            sampleData = response.data;
       
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
       
          });
      } catch (error) {}
    }






// Update data property of yAxis with unique program values
// const programs = [...new Set(reportData.map(item => item.program))];


// option.yAxis.data = option.yAxis.data.concat(programs);

// console.log(option.yAxis.data);

// const takersData = reportData.map(item => item.number_of_takers);
// option.series[0].data = takersData;
// console.log(option.series[0].data );

// const passersData = reportData.map(item => item.number_of_passers);
// option.series[1].data = passersData;
// console.log(option.series[1].data );


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
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: []
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
            exam_date:2023
        }
    },

    components:{
        VChart
    },

    methods:{
        async FetchData(position, campus_id , user_id) {
            try {
                const response = await axios
                    .post(import.meta.env.VITE_API_HEP_REPORT, {
                        position: position,
                        campus_id: campus_id,
                        user_id: user_id,
                        exam_date: this.exam_date,


                    })
                    .then((response) => {

                        this.reportData = response.data;

                        this.programs = [...new Set(this.reportData.map(item => item.program))];
                        this.takers = [...new Set(this.reportData.map(item => item.number_of_takers))];
                        this.passers = [...new Set(this.reportData.map(item => item.number_of_passers))];
                        console.log(JSON.stringify(this.programs))
                        console.log(JSON.stringify(this.takers))
                        console.log(JSON.stringify(this.passers))
                        // console.log( JSON.stringify(this.reportData))

                        // if (response.data == "Successfully HEP added!"){
                        //     this.isDataActive = false;
                        // }

                        this.option.yAxis.data = this.programs
                        this.option.series[0].data = this.takers
                        this.option.series[1].data = this.takers
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