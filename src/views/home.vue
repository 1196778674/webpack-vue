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

<style lang="css" scoped>
.main-container{
  width: 100%;
  overflow: hidden;
}
.left-main{
  width: 80px;
  height: 100%;
  float: left;
  background: red;
}
.right-main{
  float: right;
  width: 90%;
}
</style>