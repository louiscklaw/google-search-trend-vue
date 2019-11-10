<template>
  <div>
    <app-navbar></app-navbar>
    <slot />
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appNavbar from '../components/app-navbar.vue'
  import appFooter from '../components/app-footer.vue'

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
        ...common.getFacebookOgMeta('desc','title','site','local','type','url','img'),
        ...common.getTwitterOgMeta('site', 'creator', 'title', 'description', 'image')
        ]
    }
  }
</script>

<style>

</style>