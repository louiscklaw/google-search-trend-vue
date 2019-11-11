<template>
  <div>
    <pre>{{ keyword }}</pre>
    <pre>{{ dayBack }}</pre>
    <pre>{{ resolution }}</pre>
    <pre>{{ graph_title }}</pre>
  </div>
</template>

<script>
  export default {
    props: [ 'keyword', 'dayBack', 'resolution', 'graph_title' ],
  }
</script>

<style>

</style>