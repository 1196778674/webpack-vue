import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

// views页面引入
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
var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
router.map({
  '/home': {
    component: {home}
  }
})

router.start(App, 'body')
