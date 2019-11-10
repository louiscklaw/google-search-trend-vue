<template>
  <div>
    <app-navbar></app-navbar>
    <div class="content">
      <slot />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appNavbar from '../components/app-navbar.vue'
  import appFooter from '../components/app-footer.vue'

  import {
    FB_DEFAULT_META,
    TWITTER_DEFAULT_META
  } from '../const'
  import common from '../common'

  export default {
    components: {
      appNavbar,
      appFooter
    },
    metaInfo: {
      titleTemplate: '%s | my google trends',
      description: 'meta description',
      meta: [
        common.getOgMeta( FB_DEFAULT_META.fb_site_name, 'site-name' ),
        common.getTwitterMeta( TWITTER_DEFAULT_META.twitter_site, 'site-name' )
      ]
    }
  }
</script>

<style scoped>
  .content{
    min-height: calc( 100vh - 52px)
  }
</style>