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
    title: {
    text: 'Faculty Development',
    left:"center",
    textStyle:{
        fontSize:"15px",
    }
  
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

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
    data: ['Target and Accomplishment',]
  },
  series: [
    {
      name: 'Accomplishment',
      type: 'bar',
      barWidth:"20%",
      data: [
       {
         value:32,
         itemStyle:{
           color:"#06ECC3"
         }
       },
   
        ]
    },
    {
      name: 'Target',
      type: 'bar',
      barWidth:"20%",
      data: [{
          value:43,
          itemStyle:{
            color:"#EC061D"
          }
      }]
    }
  ]
};
  </script>
  
  <style scoped>
  .chart {

    height: 45vh;
    width: 80%;
   
  }
  </style>
  