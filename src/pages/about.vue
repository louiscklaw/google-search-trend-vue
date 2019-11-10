<template>
  <div>
    <h1>about</h1>
    <router-link to="/">helloworld</router-link>
  </div>
</template>

<script>
  import layoutsHelloworld from '../layouts/helloworld.vue'

  export default {
    created() {
      this.$emit('update:layout', layoutsHelloworld)
    }
  }
</script>

<style>

</style>