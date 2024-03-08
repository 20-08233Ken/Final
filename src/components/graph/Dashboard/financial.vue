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
    "#EC061D",
    "#06ECC3",
 
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
    data: ['Subsidy Income from National Government', 'Income from Operations', 
          'Personal Services', 'Cost of Goods Sold', 'MOOE', 'Financial Charge','IGP Income']
  },
  series: [

    {
        name: '2017',
        type: 'bar',
        barWidth:"30%",
        barCategoryGap: '50%',
        data: [9704217.43, 14204217.43, 13704217.43, 14704217.43, 14704217.43, 14704217.43,14204217.43]
      
    },
        {
      name: '2016',
      type: 'bar',
      barWidth:"30%",
      barCategoryGap: '50%',
      data: [11827865.71, 16127865.71, 16827865.71, 16827865.71, 16827865.71, 16827865.71,16827865.71]
    },
  ],

};
  </script>
  
  <style scoped>
  .chart {

    height: 75vh;
    width: 100%;
   
  }
  </style>
  