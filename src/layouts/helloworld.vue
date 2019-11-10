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

  export default {
    components: {
      appNavbar,
      appFooter
    }
  }
</script>

<style>

</style>