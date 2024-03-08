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
    text: 'Faculty by Academic Rank',
    left:'center',
    textStyle:{
        fontSize:"15px"
    }
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
    data: ['Professor', 'Associate Professor', 'Assistant Professor', 'Instructor']
  },
  series: [
    {
 
      type: 'bar',
      barWidth: '50%',
      data: [
              {
        value:25,
        itemStyle:{
          color:"#CF0412"
        }
      },
            {
        value:50,
        itemStyle:{
          color:"#E86217"
        }
      },
      
            {
        value:75,
        itemStyle:{
          color:"#8E04CF"
        }
      },
      {
        value:100,
        itemStyle:{
          color:"#04AACF"
        }
      },
        
        ]
    },

  ]
};
  </script>
  
  <style scoped>
  .chart {

    height: 45vh;
    width: 80%;
   
  }
  </style>
  