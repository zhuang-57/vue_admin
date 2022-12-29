import Vue from 'vue'
import App from './App.vue'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由器
import router from './router'

// 引入Vuex
import store from './store'
// 引入echarts
// import * as echarts from 'echarts'


Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts;
// 引入element插件库
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
}).$mount('#app')
