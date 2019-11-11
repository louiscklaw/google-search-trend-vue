<template lang="pug">
  section.section
    .container
      .columns
        .column.is-half
          h1.subtitle.is-3 about page
          ul
            li this is a page re-organize the data scraped from google trends/wikipedia
      .columns
        .column.is-half
          h1.subtitle.is-3 todo list:
          ul
            li integrate with the data found from wikipedia about world population

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
        content: 'about'
      }]
    }
  }
</script>
