<template>
  <div>
    <h1>helloworld page</h1>
  </div>
</template>

<script>
  import layoutsHelloworld from '../layouts/helloworld.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutsHelloworld )
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

<style>

</style>