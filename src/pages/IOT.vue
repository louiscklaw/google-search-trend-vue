<template lang="pug">
  section.section
    - var keywords = [ 'quectel', 'ublox','simcom','telit','sierrawireless']
    - var geo = ""
    - var graph_title = "IOT brand compare"

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
            .column.is-one-fifth
              h6(v-if="test==1").map-subtitle.subtitle.is-6 #{test_value}
              map-choropleth(keyword=test_value dayBack=365*test resolution="'COUNTRY'" graph_title=graph_title+' ('+ test_value +','+ test +' years )')

</template>


<script>
  import layoutDefault from '../layouts/default.vue'

  import lineChartCard from '../components/cards/lineChartCard.vue'
  import MapChoropleth from '../components/mapChoropleth.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'About',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'IOT terms compare'
      }]
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