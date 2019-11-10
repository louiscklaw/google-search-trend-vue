<template>
  <div class="card">
    <div class="vld-parent">
      <loading :loader="'dots'" :height="35" :width="35" :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage" />

      <div class="card-image">
        <line-chart v-bind:labels="labels" v-bind:datasets="datasets" v-bind:listen_to="listen_to"></line-chart>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left reserved">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-6">search compare {{ this.day_back / 365 }} year</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content reserved">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import lineChart from '../charts/lineChart.vue'

  import _const from '../../mixins/_const'
  import chart_mixin from '../../mixins/chart_mixin'
  let cm = chart_mixin.methods

  import { bus } from '../../main'

  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  function getChartLabels( json_chart_in ) {
    return json_chart_in.map( chart_data => chart_data.formattedTime )
  }

  function parseDataSets( json_chart_in, keywords ) {
    let output = []
    _const

    for ( var i = 0; i < keywords.length; i++ ) {
      output.push( {
        label: keywords[ i ],
        borderColor: _const.CHART_COLORS[ i ],
        backgroundColor: 'rgba(255,255,255,0.1)',
        data: json_chart_in.map( chart_data => chart_data.value[ i ] ),
        lineTension: 0.1
      } )

    }
    return output
  }

  export default {
    props: [
      'keywords',
      'day_back',
      'geo',
      'chart_title'
    ],
    data() {
      return {
        labels: [],
        datasets: [],
        listen_to: 'updateCharts/' + Math.random().toString().slice( 2, 20 ),
        isLoading: true,
        fullPage: false
      }
    },
    components: {
      'line-chart': lineChart,
      'loading': Loading
    },
    created() {
      // TODO: necessary to use array ?
      let incoming_geo = this.geo[ 0 ]

      cm.chart_interest_over_time( {
          geo: incoming_geo,
          keyword: this.keywords,
          dayBack: this.day_back
        } )
        .then( chart_data => {
          bus.$emit( this.listen_to, [
            getChartLabels( chart_data.default.timelineData ),
            parseDataSets(
              chart_data.default.timelineData, [ 'CALL4VAN', 'lalamove', 'GoGoVan' ]
            )
          ] )
          this.isLoading = false
        } )

    }
  }
</script>

<style lang="scss" scoped>
  .reserved {
    display: none;
  }
</style>