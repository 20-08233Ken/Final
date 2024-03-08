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
    // tooltip: {
    //   trigger: 'item'
    // },
  color:[
    '#D00412',
    '#d9d9d9',

    ],

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['65%', '100%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      // emphasis: {
      //   label: {
      //     show: true,
      //     fontSize: 40,
      //     fontWeight: 'bold'
      //   },
      // },
      labelLine: {
        show: false
      },
      data: [
        { value: 50, name: 'Search Engine' },
        { value: 50, name: 'Direct' },

      ]
    }
  ]
};
  </script>
  
  <style scoped>
  .chart {
    height: 22vh;
    padding: 2px;
    width: 35%;
    margin-top: 1rem;

  }
  </style>
  