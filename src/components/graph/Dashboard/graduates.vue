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
      text:"Graduates",
      right:"center",
      bottom:"5%"
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    right: 'center',
    // orient:"vertical"
  },
  color:[
    "#06ECC3",
    "#EC061D",
    "#E86217"
  ],
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
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
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Main' },
        { value: 735, name: 'Alangilan' },
        { value: 535, name: 'Extension Campus' },

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
  