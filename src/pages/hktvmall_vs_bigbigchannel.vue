<template lang="pug">
  section.section
    - var keywords = [ 'hktvmall', 'bigbigchannel' ]
    - var geo = "HK"
    - var graph_title = "programming lang compare"

    .container
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(v-bind:keywords=keywords v-bind:geo=[geo] v-bind:day_back=day_back*365 v-bind:chart_title="chart_title")

        each day_back in [10]
          .column.is-half
            line-chart-card(v-bind:keywords=keywords v-bind:geo=[geo] v-bind:day_back=day_back*365 v-bind:chart_title="chart_title")

      each test_value in keywords
        .columns
          each test in [1,3,5]
            .column.is-one-third
              h6(v-if="test==1").map-subtitle.subtitle.is-6 #{test_value}
              map-choropleth(keyword=test_value dayBack=365*test resolution="'COUNTRY'" graph_title=graph_title+' ('+ test +' years )')
</template>

<script>
  // import barChart from '../components/bar_chart.vue'
  import lineChartCard from '../components/cards/lineChartCard.vue'
  import layoutDefault from '../layouts/default.vue'
  import MapChoropleth from '../components/mapChoropleth.vue'

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
      'line-chart-card': lineChartCard,
      MapChoropleth
    }
  }
</script>


<style scoped>
  .map-subtitle {
    font-size: 0.8rem;
  }
</style>
