<template lang="pug">
  section.section
    - var keywords = [ 'hktvmall', 'bigbigchannel' ]
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
  import layoutDefault from '../layouts/default.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    data() {
      return {
        chart_title: 'programming language search popularity in last'
      }
    },
    components: {
      'line-chart-card': lineChartCard
    }
  }
</script>