<template>
  <nv-header></nv-header>
  <nv-main></nv-main>
  <nv-footer></nv-footer>
</template>

<script>
  export default {
    replace: false,
    components: {
      "nvHeader": require('./components/header.vue'),
      "nvMain": require('./components/main.vue'),
      "nvFooter": require('./components/footer.vue')
    }
  }
</script>