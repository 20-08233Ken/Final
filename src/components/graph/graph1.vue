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
    text:"Total Admissions (Undergraduate)",
    bottom: "0",
    left:"center",
    textStyle: {
      fontSize:"16px"
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: ''
  },
    color: [
    '#EC061D',
    '#06ECC3',
    

  ],
  series: [
    {
      name: 'Total Admissions (Undegraduate)',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
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
        { value: 5048, name: 'Male' },      
        { value: 7325, name: 'Female' },


      ]
    }
  ]
};
  </script>
  
  <style scoped>
  .chart {
    height: 50vh;
    width: 100%;
   
  }
  </style>
  