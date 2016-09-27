import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

// views页面引入
import index from './app.vue'
import home from './views/home.vue'


// 引入css样式
import 'bootstrap/dist/css/bootstrap.css'
import './styles/common.css'

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
		component: Index
	},
	'/home': {
	  	name: 'home',
	    component: home
	}
})

//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
router.redirect({
    //重定向任意未匹配路径到/index
    '*':"/index"
});

router.start(App, '#vueApp')
