<template>
  <div class="chart">
    <highcharts
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import merge from 'lodash/merge';

export default {
  name: 'BarChart',
  components: {
    highcharts: Chart,
  },
  props: {
    categories: {
      type: Array,
      default: () => ([]),
    },
    series: {
      type: Array,
      default: () => ([]),
    },
    customOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    chartOptions() {
      const options = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Vihecles',
        },
        xAxis: {
          categories: this.categories,
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Quantity',
          },
          stackLabels: {
            enabled: true,
          },
        },
        tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: this.series,
        credits: {
          enabled: false,
        },
      };
      return merge({}, options, this.customOptions);
    },
  },
};
</script>
