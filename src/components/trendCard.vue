<template>
  <div class="card">
      <header class="card-header" style="text-align: center; display: block">
        <h6 class="subtitle is-6 is-centered" style="padding: 20px">
          <a :href="'https://trends.google.com/trends/trendingsearches/daily?geo='+location" target="_blank">
            Daily trend of {{ location }}
            <font-awesome-icon class="fa_icon_style" :icon="['fas', 'external-link-alt']" />
          </a>
        </h6>
      </header>
      <div class="card-content">
        <div class="content">
          <trend-table v-bind:geo="location"></trend-table>
        </div>
      </div>
      <footer class="card-footer">
        <!-- <a v-bind:href="trendingSearches[0].shareUrl" class="card-footer-item" target="_blank">Goto google trend</a> -->
      </footer>
    </div>

</template>

<script>
  import trendTable from '../components/trendTable.vue'

  export default {
    data() {
      return {
        trendingSearches: {},
        isLoading: true,
        fullPage: false
      }
    },
    props: [ 'location' ],
    components: {
      'trend-table': trendTable
    }
  }
</script>
