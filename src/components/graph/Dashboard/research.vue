<template>
    
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
  
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);
  
  provide(THEME_KEY, 'white');
  
  const option = {
    title:{
      text:"Resarch output published / disseminated",
      left:"center",
      top:"5%",
      textStyle:{
        fontSize:"14px"
      }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '0%',
    left: 'center',
    
  },
  color:[
    "#06ECC3",
    "#EC061D",
  ],
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
   
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Internation Publication' },
        { value: 735, name: 'National Publication' },

      ]
    }
  ]
};
  </script>
  
  <style scoped>
  .chart {

    height: 55vh;
    width: 80%;
   
  }
  </style>
  