<template>
	{{usercenter}}
	<select v-model="selected">
		<option v-for="option in selection" value="{{option.key}}">{{option.value}}</option >
	</select>
	<button type="button" @click="test()">button</button>
</template>

<script>
export default {

  name: 'usercenter',
  methods: {
  	aaa(a) {
  		console.log(a);
  	},
    test () {
    	this.aaa(this.selected);
    }
  },
  data () {
    return {
    	selected: '0',
    	usercenter: "usercenter!!!!!!!",
    	selection: [{"key":"0","value":"value0"},{"key":"1","value":"value1"},{"key":"2","value":"value2"},{"key":"3","value":"value3"},{"key":"4","value":"value4"},{"key":"5","value":"value5"}]
    };
  }
};
</script>

<style lang="css" scoped>
</style>