<template lang="pug">
  section.section
    .columns
      .column
        font-awesome-icon(:icon="['fas', 'camera']")
        font-awesome-icon(:icon="['fas', 'external-link-alt']")


</template>

<script>
  import layoutDefault from '../../layouts/default.vue'

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
        content: 'about'
      }]
    }

  }
</script>

<style>

</style>