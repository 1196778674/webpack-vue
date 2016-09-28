// 加载vue和vue-router依赖
import Vue from 'vue'
import VueRouter from 'vue-router'

// 加载入口文件
import app from './app.vue'

// views页面引入
import index from './app.vue'
import home from './views/home.vue'
import homeIndex from './views/index.vue'
import storemanagement from './views/storemanagement.vue'
import datastatistics from './views/datastatistics.vue'
import contractedstores from './views/contractedstores.vue'

// 引入第三方库
window.$ = window.jQuery = require('jquery')
window.bootstrap = require('bootstrap')

// 引入css样式
import 'bootstrap/dist/css/bootstrap.css'
import './styles/app.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const router = new VueRouter()
const App = Vue.extend(app)

//get json数据
var VueResource = require('vue-resource')
Vue.use(VueResource)

// 定义组件
var Index = Vue.extend({
  template: '<p>这是首页</p>'
})

// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
router.map({
	'index': {
		name: 'index',
		component: home,
		// 渲染子视图
		subRoutes: {
	      '': { component: homeIndex},
	      '/storemanagement': { component: storemanagement},
	      '/datastatistics': { component: datastatistics},
	      '/contractedstores': { component: contractedstores}
	    }
	}
})

//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
router.redirect({
    '*':"/index"
});

router.start(App, '#vueApp')