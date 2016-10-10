<template>
	<ul class="left">
		<li v-for="item in leftnavs">
			<a href="#" v-link="{path:item.url}" :class="{'active': item.isActive}" @click="hasAcitve($index)">
        <span>{{ item.name }}</span>
      </a>
		</li >
	</ul>
</template>

<script>
export default {

  name: 'left',
  methods: {
    hasAcitve (index) {
      $.each(this.leftnavs, function(index, val) {
        val.isActive = false;
      });
      this.leftnavs[index].isActive = true;
    }
  },
  data () {
    return {
    	leftnavs : [{"name": "首页","url": "/index","isActive":true}, {"name": "门店管理","url": "/index/storemanagement","isActive":false}, {"name": "签约门店","url": "/index/contractedstores","isActive":false}, {"name": "数据统计","url": "/index/datastatistics","isActive":false}]
    };
  }
};
</script>