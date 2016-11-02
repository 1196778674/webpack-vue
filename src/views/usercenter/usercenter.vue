<template>
  <div id="todo">
    <todo-form username='Lily'></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script>
export default {
  replace: false,
  components: {
    "todoForm": require('./tpl/form.vue'),
    "todoList": require('./tpl/list.vue')
  },
  events: {
    addlist: function(input) {
      this.$broadcast('addlist', input); // 数据向下传递
    }
  }
}
</script>