<template lang="pug">
  section.section
    - var keywords = [ 'belt and road' ]
    - var geo = "HK"
    - var graph_title = "search population"

    .container
      .columns
        .column.is-full
          h3.subtitle.is-6 search popularity about "belt and road (HK)"
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(:keywords=keywords :geo=["HK"] :day_back=day_back*365 :chart_title="chart_title" legend_display="false")

        each day_back in [10]
          .column.is-half
            line-chart-card(:keywords=keywords :geo=["HK"] :day_back=day_back*365 :chart_title="chart_title" legend_display="false")

      .columns
        .column.is-full
          h3.subtitle.is-6 search popularity about "belt and road (CN)"
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(:keywords=keywords :geo=["CH"] :day_back=day_back*365 :chart_title="chart_title" legend_display="false")

        each day_back in [10]
          .column.is-half
            line-chart-card(:keywords=keywords :geo=["CH"] :day_back=day_back*365 :chart_title="chart_title" legend_display="false")

      .columns
        .column.is-full
          h3.subtitle.is-6 search popularity about "belt and road (world)"
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(:keywords=keywords  :day_back=day_back*365 :chart_title="chart_title" legend_display="false")

        each day_back in [10]
          .column.is-half
            line-chart-card(:keywords=keywords  :day_back=day_back*365 :chart_title="chart_title" legend_display="false")

      .columns
        each test in [1,3,5,10]
          .column.is-one-quarter
            -var test_value = "belt and road"
            h6(v-if="test==1").map-subtitle.subtitle.is-6 #{test_value}
            map-choropleth(keyword=test_value dayBack=365*test resolution="'COUNTRY'" graph_title=graph_title+' ('+ test_value +','+ test +' years )')

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
      lineChartCard,
      MapChoropleth
    }
  }
</script>