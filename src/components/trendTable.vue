<template>
  <div class="vld-parent">
    <loading :loader="'dots'" :height="35" :width="35" :active.sync="isLoading" :can-cancel="true"
      :is-full-page="fullPage" />
    <table class="table">
      <thead>
        <tr>
          <td>rank</td>
          <td>topic</td>
          <td>traffic</td>
          <td class="hide_columns"> google </td>
          <td class="hide_columns"> articles</td>
        </tr>
      </thead>
      <tbody class="is-small">
        <tr v-for="idx in trendingSearches.length" :key="idx">
          <td>{{ idx }}</td>
          <td>
            <a :href="trendingSearches[idx-1].image.newsUrl"
              target="_blank">{{ trendingSearches[idx-1].title.query }}</a>
          </td>
          <td>
            {{ trendingSearches[idx-1].formattedTraffic }}
            <a :href="trendingSearches[idx-1].shareUrl" target="_blank">
              <font-awesome-icon class="fa_icon_style" :icon="['fas', 'search']" />
              <font-awesome-icon class="fa_icon_style" :icon="['fas', 'external-link-alt']" />
            </a>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  // import mixins from '../mixins/mixin'
  import fetcher from '../mixins/fetcher'
  import _const from '../mixins/_const'

  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    data() {
      return {
        trendingSearches: [],
        isLoading: true,
        fullPage: false
      }
    },
    props: [ 'geo' ],
    components: {
      'loading': Loading
    },
    created: function(){
      let Q_DAILY_TRENDS = _const.Q_DAILY_TRENDS
      let fm = fetcher.methods

      fm.fetch_post_request( {
          q: Q_DAILY_TRENDS,
          param: {
            trendDate: new Date(),
            geo: this.geo
          }
        } )
        .then( res => res.json() )
        .then( json => {
          this.trendingSearches = json.default.trendingSearchesDays[ 0 ].trendingSearches.slice( 0, 10 )
          this.isLoading = false
        } )

    }

  }
</script>

<style scoped>
  .hide_columns{
    display:none;
  }
  .fa_icon_style {
    margin: 0px 1px;
  }
</style>