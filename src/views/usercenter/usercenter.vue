<template>
	{{usercenter}}
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
    	this.aaa(1);
    }
  },
  data () {
    return {
    	usercenter: "usercenter!!!!!!!"
    };
  }
};
</script>

<style lang="css" scoped>
</style>