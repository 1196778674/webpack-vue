<template>
  <nv-header></nv-header>
  <router-view ></router-view>
  <nv-footer></nv-footer>
</template>

<script>
  export default {
    replace: false,
    components: {
      "nvHeader": require('./components/header.vue'),
      "nvFooter": require('./components/footer.vue')
    }
  }
</script>