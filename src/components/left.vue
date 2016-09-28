<template>
	<ul class="left">
		<li v-for="item in leftnavs">
			<a href="#" v-link="{path:item.url}">{{ item.name }}</a>
		</li >
	</ul>
</template>

<script>
export default {

  name: 'left',

  data () {
    return {
    	leftnavs : [{"name": "首页","url": "/index"}, {"name": "门店管理","url": "/index/storemanagement"}, {"name": "签约门店","url": "/index/contractedstores"}, {"name": "数据统计","url": "/index/datastatistics"}]
    };
  }
};
</script>