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
      text:"Passing Rate of Licensure Examination",
      top:"1",
      left:"30%"
    },
    legend: {
      top:"0",
      left:"60%"
    },
  tooltip: {},
   color:[

    "#EC061D",
    "#06ECC3",
  ],
  dataset: {
    dimensions: ['product', '2015', '2016',''],
    source: [
      { product: 'Agirculture', 2015: 43.3, 2016: 85.8, },
      { product: 'Sanitary Engr', 2015: 83.1, 2016: 73.4,  },
      { product: 'Mechanical Engr', 2015: 86.4, 2016: 65.2, },
      { product: 'Nutritional Dietetics', 2015: 72.4, 2016: 43.9,  },
      { product: 'Elementary Educ', 2015: 12.4, 2016: 23.9, },   
      { product: 'Secondary Educ', 2015: 52.4, 2016: 33.9,  },
      { product: 'Electronics Eng', 2015: 32.4, 2016: 43.9,  },
      { product: 'Electrical Eng', 2015: 22.4, 2016: 58.9,  },   
      { product: 'Accountancy ', 2015: 12.4, 2016: 25.9,  },
      { product: 'Electronics Eng', 2015: 76.4, 2016: 33.9,  },
      { product: 'Chemical Eng', 2015: 22.4, 2016: 23.9,  },   
      { product: 'Civil Eng', 2015: 32.4, 2016: 36.9,  },
      { product: 'Architecture', 2015: 62.4, 2016: 53.9,  },

    ]
  },
  xAxis: { 
    type: 'category',
    axisLabel:{interval:0 ,rotate:30}
    },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

};

  </script>
  
  <style scoped>
  .chart {

    height: 50vh;
    width: 100%;
   
  }
  </style>
  