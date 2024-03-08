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

 

    color: [
    '#EC061D',
    '#06ECC3',
    

  ],
  series: [
    {
      name: 'Total Admissions (Undegraduate)',
      type: 'pie',
      radius: ['60%', '100%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },

      labelLine: {
        show: false
      },
      data: [
        { value: 98, name: 'Target' },      
        { value: 2, name: 'None' },


      ]
    }
  ]
};
  </script>
  
  <style scoped>
  .chart {
    height: 25vh;
    width: 100%;

   
  }
  </style>
  