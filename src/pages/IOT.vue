<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-full">
            <h3 class="subtitle is-3">IOT page</h3>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import layoutDefault from '../layouts/default.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'About',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: 'IOT terms compare'
      }]
    }

  }
</script>

<style>

</style>