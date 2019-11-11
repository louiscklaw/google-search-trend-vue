<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-full">
            <h1 class="subtitle is-3">test maps</h1>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-quarter">
            <map-choropleth
              :keyword="'apple'"
              :dayBack="365"
              :resolution="'COUNTRY'"
              :graph_title="'test graph title'"
              />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import layoutDefault from '../../layouts/default.vue'
  import MapChoropleth from '../../components/mapChoropleth.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    components: {
      MapChoropleth
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'About',
      meta: [ {
        vmid: 'description',
        name: 'description',
        content: 'about'
      } ]
    }

  }
</script>
