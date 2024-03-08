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
    text:"Global Academic Cooperation Advanced",
    left:'center',
    bottom:'0'
  },
  legend: {

  },
  label:{
    textStyle:{color:'white'}
  },
  tooltip: {},
  dataset: {
    dimensions: ['stategy', 'Implented', 'Implented_but_Target_Unmet', 'On_Going_Implemetation',"Unimplemented",],
    source: [
      { stategy: 'Strategy 1', Implented: 43.3, Implented_but_Target_Unmet: 85.8, On_Going_Implemetation: 93.7 , Unimplemented: 3.7,},
      { stategy: 'Strategy 2', Implented: 83.1, Implented_but_Target_Unmet: 73.4, On_Going_Implemetation: 55.1 , Unimplemented: 9.7,},
      { stategy: 'Strategy 3', Implented: 86.4, Implented_but_Target_Unmet: 65.2, On_Going_Implemetation: 82.5 , Unimplemented: 33.7,},
      { stategy: 'Strategy 4', Implented: 72.4, Implented_but_Target_Unmet: 53.9, On_Going_Implemetation: 39.1 , Unimplemented: 93.7,},
      { stategy: 'Strategy 5', Implented: 86.4, Implented_but_Target_Unmet: 65.2, On_Going_Implemetation: 82.5 , Unimplemented: 72.7,}
    ],
  },
  xAxis: { type: 'category', nameTextStyle:{color:'white'}},
  
  yAxis: {nameTextStyle:{}},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }]
};
  </script>
  
  <style scoped>
  .chart {
    
    height: 50vh;
    width: 100%;
    color: white;
   
  }
  </style>
  