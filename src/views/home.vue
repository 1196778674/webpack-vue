<template>
  <div class="left-main">
    <nv-left></nv-left>
  </div>
  <div class="right-main">
    <router-view ></router-view>
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

<style lang="css" scoped>
.left-main{
  width: 80px;
  height: 100%;
  float: left;
}
.right-main{
  float: left;
}
</style>