<template>
	<h1>{{username}}'s Todo List</h1>
    <form v-on:submit="add">
      <input type="text" v-model="input"/>
      <input type="submit" value='add' />
    </form>
</template>

<script>
export default {

  name: 'form',
  props: {
  	username: {
  		type: String,
  		default: 'unname'
  	}
  },
  methods: {
    add: function() {
    	this.$dispatch("add", this.input); // 向上传递数据
    	this.input = '';
    }
  },
  data () {
    return {
    	input: ''
    };
  }
};
</script>