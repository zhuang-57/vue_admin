import Vue from 'vue'

import 'normalize.css/normalize.css' //一个css重置

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

//global css(全局样式)
import '@/styles/index.scss'
// 引入路由器
import router from './router'
import App from './App.vue'
// 引入Vuex
import store from './store'
import '@/icons' //icon
import '@/permission' //permission 控制
// 引入echarts
// import * as echarts from 'echarts'
// 引入element插件库
Vue.use(ElementUI,{locale});

Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts;


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app')
