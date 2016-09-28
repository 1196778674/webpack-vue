<template>
	<nav class="navbar navbar-default navbar-static-top" role="navigation" :style="heightObj">
		<div class="container">
			<a class="navbar-brand" href="#">vueApp</a>
			<ul class="nav navbar-nav">
				<li v-for="nav in navs">
					<a href="#" v-link="{path:nav.url}">{{nav.name}}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
	    data () {
	    	// 获取nav列表
	  		this.$http.get('./src/json/nav.json',null).then(res => {
	  			this.navs = res.data;
	  		}).catch(err => {
	  	  		console.log(err);
	  		});
	  		// 定义高度
	  		var heightObj = {
	  			background: '#fff'
	  		};
	    	return {
	    		navs: this.navs,
		    	heightObj: heightObj
	    	};
	  	}
	};
</script>