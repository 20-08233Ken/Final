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

const  option = {
  legend: {},
  tooltip: {},
     orient: 'horizontal',
  dataset: {
    // program: ['BS Ed' ,'BS Eng', 'BS Acc'],
    // datalist:[{'Employed':32,'Unemployed':32,'Not Tracked':'32'}],
    dimensions: ['program', 'Employed', 'Unemployed', 'Not Tracked'],
    source: [
      { program: 'BS Ed', 'Employed': 43.3, 'Unemployed': 85.8, 'Not Tracked': 93.7 },
      { program: 'BS Eng', 'Employed': 83.1, 'Unemployed': 73.4, 'Not Tracked': 55.1 },
      { program: 'BS Acc', 'Employed': 86.4, 'Unemployed': 65.2, 'Not Tracked': 82.5 },
      { program: 'Walnut Brownie', 'BS Ed': 72.4, 'Unemployed': 53.9, 'Not Tracked': 39.1 }
    ]
  },
  xAxis: { type: 'category' },
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