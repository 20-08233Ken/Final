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

color:[
'#D00412',
'#d9d9d9',
],

series: [
{
  name: 'Access From',
  type: 'pie',
  radius: ['70%', '100%'],
  center: ['50%', '70%'],

  startAngle: 180,
  data: [
    { value: 50},
    { value: 50},

    {
      // make an record to fill the bottom 50%
      value: 50 + 50,
      itemStyle: {
        // stop the chart from rendering this piece
        color: 'none',
        decal: {
          symbol: 'none'
        }
      },
      label: {
        show: false
      }
    }
  ]
}
]
};
  </script>
  
  <style scoped>
  .chart {
    height: 30vh;
    width: 45%;
    
   
  }
  </style>
  