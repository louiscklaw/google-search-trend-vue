<template lang="pug">
  section.section
    .columns.is-multiline
      .column.is-one-quarter(v-for="location in locations" v-bind:key="location")
        trend_card(v-bind:location="location")

</template>

<script>
  import trendCard from '../components/trendCard.vue'

  import layoutDefault from '../layouts/default.vue'

  let locations = [ 'HK', 'TW', 'US', 'CA', 'GB', 'FR', 'DE', 'FI', 'JP', 'SG' ]

  export default {
    data() {
      return {
        'locations': locations
      }
    },
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    components: {
      'trend_card': trendCard
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'hot topics of the world',
      meta: [ {
        vmid: 'description',
        name: 'description',
        content: 'google trends categorized by country'
      } ]
    }

  }
</script>

<style>

</style>