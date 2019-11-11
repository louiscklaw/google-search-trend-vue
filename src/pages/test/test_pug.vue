<template lang="pug">
  section.section
    .columns.is-multiline
      each val in ['1','2','3','4']
        .column.is-one-quarter
          test-component(test_value=val)
</template>

<script>
  // pre(test_param="{test: test_value}") #{test_value}
  import layoutDefault from '../../layouts/default.vue'
  import testComponent from '../../components/test_component.vue'

  export default {
    created() {
      this.$emit( 'update:layout', layoutDefault )
    },
    components:{
      testComponent
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
