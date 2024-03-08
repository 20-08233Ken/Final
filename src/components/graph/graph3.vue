<template>
    
    <div style="width: 100%;flex-direction: column;overflow-x: auto;height: 100vh;" class="bg-slate-50">
       <v-chart class="chart" :option="option" autoresize />
    <div style="width: 101vw;">
    </div>
    </div>    
  </template>
  
  <script setup>
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import "echarts";
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
    text:"Top 10 Colleges",
    top: "15%",
    left:"65%",
    textStyle: {
      fontSize:"20px",
      color:"#94080D"
    }
  },
  legend: {
      type:"scroll",
      orient:"vertical",
      top:"20%",
      left:"65%",
      textStyle: {
        fontSize:"14px",
    } 
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  color: [
  '#CF0412',
  '#E86217',
  '#CF7E04',
  '#2DCF04',
  '#04CF9E',
  '#04AACF',
  '#CF0472',
  '#8E04CF',
  '#0431CF',
  '#70F5ED'

  ],
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      // dataView: { show: true, readOnly: false },
      // restore: { show: true },
      // saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'College',
      type: 'pie',
      radius: [100, 300],
      center: ['30%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 105, name: 'College of Accountancy, Business, Economics, and International Hospitality Management' },
        { value: 100, name: 'College of Engineering, Architecture, and Fine Arts' },
        { value: 95, name: 'College of Arts and Sciences' },
        { value: 85, name: 'College of Teacher Education' },
        { value: 80, name: 'College of Industrical Technology' },
        { value: 75, name: 'College of Informatics and Computing Sciences' },
        { value: 70, name: 'College of Nursing' },
        { value: 65, name: 'College of Agriculture' },
        { value: 60, name: 'College of Law' },
        { value: 55, name: 'College of College of Medicine' },
      ] 
    }
  ]
};
  </script>

    
<style scoped>
.chart {
  /* height: 50rem; */
  
  width: 110rem;
  /* height: 80vh; */
  /* background-color: white; */



 
}
</style>