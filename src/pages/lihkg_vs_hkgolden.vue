<template lang="pug">
  section.section
    - var keywords = [ 'lihkg', 'hkgolden' , 'hkepc','批踢踢','reddit' ]
    - var geo = "HK"

    .container
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(v-bind:keywords=keywords v-bind:geo=[geo] v-bind:day_back=day_back*365 v-bind:chart_title="chart_title")

        each day_back in [10]
          .column.is-half
            line-chart-card(v-bind:keywords=keywords v-bind:geo=[geo] v-bind:day_back=day_back*365 v-bind:chart_title="chart_title")

</template>

<script>
  // import barChart from '../components/bar_chart.vue'
  import lineChartCard from '../components/cards/lineChartCard.vue'

  export default {
    data() {
      return {
        chart_title: 'chart title'
      }
    },
    components: {
      'line-chart-card': lineChartCard
    }
  }
</script>