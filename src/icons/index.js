import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue' //svg组件

//全局注册组件
Vue.component('svg-icon', SvgIcon)

// require.context:读取指定目标的所有文件，参数：（目录，是否遍历子目录，定义遍历文件规则，/\.svg$/是表示以.svg结尾的文件
//定义一个加载目录的函数
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg',false,/\.svg$/)
//加载目录下的所有svg文件
requireAll(req)