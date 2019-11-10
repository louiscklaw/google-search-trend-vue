<template>
  <div class="vld-parent">
    <loading :loader="'dots'" :height="35" :width="35" :active.sync="isLoading" :can-cancel="true"
      :is-full-page="fullPage" />

      <div id="mapbody" style="visibility: hidden">
        <!-- :center="[-23.752961, -57.854357]" -->
        <l-map
        :zoom="0" style="height: 400px;"
        :options="mapOptions">
          <l-choropleth-layer
            :data="myData" titleKey="geoName" idKey="geoCode"
            :value="value"
            :extraValues="extraValues" geojsonIdKey="iso_a2"
            :geojson="worldGeojson"
            :colorScale="colorScale">

            <template slot-scope="props">
              <l-info-control
                :item="props.currentItem"
                :unit="props.unit"
                title="test region"
                placeholder="" />
              <l-reference-chart
                title="chart title"
                :colorScale="colorScale"
                :min="props.min"
                :max="props.max"
                position="topright" />
            </template>

          </l-choropleth-layer>
        </l-map>

      </div>

  </div>

</template>

<script>
  /*eslint no-unused-vars:"off" */
  /*eslint vue/no-unused-vars:"off" */
  /*eslint vue/no-unused-components:"off" */


  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  import {
    InfoControl,
    ReferenceChart,
    ChoroplethLayer
  } from 'vue-choropleth'

  import {
    geojson
  } from './data/py-departments-geojson'

  import paraguayGeojson from './data/paraguay.json'
  import worldGeojson from './data/world.json'

  import {
    pyDepartmentsData
  } from './data/py-departments-data'

  import myData from './data/myData.json'

  import _const from '../mixins/_const'
  let Q_INTEREST_BY_REGION = _const.Q_INTEREST_BY_REGION
  import fetcher from "../mixins/fetcher";
  let fm = fetcher.methods

  import {
    LMap
  } from 'vue2-leaflet';

  export default {
    name: "app",
    props: [ 'search_params' ],
    components: {
      LMap,
      'l-info-control': InfoControl,
      'l-reference-chart': ReferenceChart,
      'l-choropleth-layer': ChoroplethLayer,
      'loading': Loading
    },
    data() {
      return {
        pyDepartmentsData,
        myData,
        paraguayGeojson,
        worldGeojson,
        colorScale: [ "rgb(236, 240, 241)", "rgb(41, 128, 185)" ],
        value: {
          key: "value",
          metric: "search populations"
        },
        // extraValues: [ {
        //   key: "value",
        //   metric: "% boys"
        // } ],
        mapOptions: {
          attributionControl: false
        },
        currentStrokeColor: '3d3213',

        // loading
        isLoading: true,
        fullPage: false

      }
    },
    created() {
      fm.fetch_post_request( {
          q: Q_INTEREST_BY_REGION,
          param: this.search_params
        } )
        .then( res => res.json() )
        .then( json => {
          this.myData = json.default.geoMapData
          this.isLoading = false
          document.querySelector('#mapbody').style.visibility='visible'
        } )
    }
  }
</script>
<style scoped>
  @import "../../node_modules/leaflet/dist/leaflet.css";

  #mapbody {
    visibility: hidden;
  }

  #map {
    background-color: #000;
  }
</style>
