<template lang="pug">
  section.section
    - var keywords = [ 'CALL4VAN', 'lalamove', 'GoGoVan' ]
    - var geo = "HK"
    .container
      .columns
        each day_back in [1,5]
          .column.is-one-quarter
            line-chart-card(v-bind:keywords=keywords :geo=[geo] :day_back=day_back*365 :chart_title="chart_title")

        each day_back in [10]
          .column.is-half
            line-chart-card(:keywords=keywords :geo=[geo] :day_back=day_back*365 :chart_title="chart_title")

</template>

<script>
  import layoutDefault from '../layouts/default.vue'
  import lineChartCard from '../components/cards/lineChartCard.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    components:{
      lineChartCard
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Helloworld',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'helloworld'
      }]
    }
  }
</script>
