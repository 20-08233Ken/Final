a<template>

    <v-chart class="chart" :option="option" autoresize />

</template>

<script setup>
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

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

provide(THEME_KEY, 'white');


//CALL REPORT DATA
onMounted(() => {
    console.log('mounted!')
})


const reportData = [
    {
        "number_of_takers": 25,
        "number_of_passers": 25,
        "program_id": 1,
        "program": "Bachelor of Public Administration"
    },
    {
        "number_of_takers": 200,
        "number_of_passers": 200,
        "program_id": 2,
        "program": "Bachelor of Science in  Accountancy"
    },
    {
        "number_of_takers": 200,
        "number_of_passers": 200,
        "program_id": 2,
        "program": "Bachelor of 1"
    },
    {
        "number_of_takers": 200,
        "number_of_passers": 200,
        "program_id": 2,
        "program": "Bachelor of 2"
    },
    {
        "number_of_takers": 200,
        "number_of_passers": 200,
        "program_id": 2,
        "program": "Bachelor of 3"
    },

]

const sampleData=[]
const position=0;
const campus=0;
const user_id=0;

// For Calling the Report Data
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


onMounted(() => {
    FetchData()
})


const  option = {
  title: {
    text: 'World Population'
  },
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
};


const programs = [...new Set(reportData.map(item => item.program))];

// Update data property of yAxis with unique program values
option.yAxis.data = option.yAxis.data.concat(programs);

console.log(option.yAxis.data);

const takersData = reportData.map(item => item.number_of_takers);
option.series[0].data = takersData;
console.log(option.series[0].data );

const passersData = reportData.map(item => item.number_of_passers);
option.series[1].data = passersData;
console.log(option.series[1].data );




</script>


<style scoped>
.chart {
    height: 50vh;
    width: 100%;

}
</style>