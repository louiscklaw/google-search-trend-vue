<template lang="pug">
  section.section
    - var keywords = [ 'javascript', 'php', 'python' ]
    - var geo = ""

    .container
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(:keywords=keywords :geo=[geo] :day_back=day_back*365 :chart_title="chart_title")

        each day_back in [10]
          .column.is-half
            line-chart-card(:keywords=keywords :geo=[geo] :day_back=day_back*365 :chart_title="chart_title")

      .columns
        each keyword in ['a','b','c']
          .column.is-one-fifth
            //- map-choropleth(:keyword="keyword" :day_back="day_back" :resolution="COUNTRY")
            pre(:keyword=keyword :day_back=day_back*365 :resolution="'COUNTRY'")

</template>

<script>
  // import barChart from '../components/bar_chart.vue'
  import lineChartCard from '../components/cards/lineChartCard.vue'
  import MapChoropleth from '../components/mapChoropleth.vue'

  export default {
    data() {
      return {
        chart_title: 'programming language search popularity in last',
      }
    },
    components: {
      'line-chart-card': lineChartCard,
      MapChoropleth
    }
  }
</script>