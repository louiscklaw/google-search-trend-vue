<template lang="pug">
  section.section
    - var keywords = [ 'AWS Device Farm', 'Sauce Labs', 'WeTest','Firebase Test Lab' ]
    - var geo = ""
    - var graph_title = "technical terms compare"

    .container
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(v-bind:keywords=keywords v-bind:geo=[geo] v-bind:day_back=day_back*365 v-bind:chart_title="chart_title")

        each day_back in [10]
          .column.is-half
            line-chart-card(v-bind:keywords=keywords v-bind:geo=[geo] v-bind:day_back=day_back*365 v-bind:chart_title="chart_title")

      each test in [1,3,5]
        .columns
          each test_value in keywords
            .column.is-one-quarter
              h6(v-if="test==1").map-subtitle.subtitle.is-6 #{test_value}
              map-choropleth(keyword=test_value dayBack=365*test resolution="'COUNTRY'" graph_title=graph_title+' ('+ test_value +','+ test +' years )')
</template>

<script>
  // import barChart from '../components/bar_chart.vue'
  import layoutDefault from '../layouts/default.vue'

  import lineChartCard from '../components/cards/lineChartCard.vue'
  import mapChoropleth from '../components/mapChoropleth.vue'
  import test_component from '../components/test_component.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    data() {
      return {
        chart_title: 'chart title'
      }
    },
    components: {
      'line-chart-card': lineChartCard,
      mapChoropleth,
      'test-component': test_component
    }
  }
</script>

<style scoped>
  .map-subtitle {
    font-size: 0.8rem;
  }
</style>
