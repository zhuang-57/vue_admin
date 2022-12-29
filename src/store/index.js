// 编写Vue的核心代码部分

// 引入插件Vuex
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

// 应用Vuex插件
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        app,
        user,
        permission
    },
    getters
})

//创建并暴露store
export default store