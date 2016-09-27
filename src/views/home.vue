<template>
	<div class="jumbotron">
		<div class="container">
			<h1>{{ msg }}</h1>
		</div>
	</div>
</template>

<script>
export default {

  name: 'home',

  data () {
    return {
    	msg: 'home!!'
    };
  }
};
</script>

<style lang="css" scoped>
</style>