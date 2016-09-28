<template>
  <div class="main-container">
    <div class="left-main">
      <nv-left></nv-left>
    </div>
    <div class="right-main">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
export default {
    replace: false,
    components: {
      "nvLeft": require('../components/left.vue')
    }
  }
</script>