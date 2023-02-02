import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

//挂载前端导航卫士
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {//有token，表示已经登陆过
    if (to.path === '/login') {//要去/login，直接跳转到首页
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {//去其他请求直接放行
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          let menus=res.data.menus;
          let username=res.data.username;
          store.dispatch('GenerateRoutes', { menus,username }).then(() => { // 生成可访问的路由表
            // router.addRoute(store.getters.addRouters); // 动态添加可访问路由表
            for(let i = 0, length = store.getters.addRouters.length; i < length; i += 1){
                const element = store.getters.addRouters[i];
                router.addRoute(element);
            }
            next({ ...to, replace: true })
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {//没有token，没登录去其他页面，重定向到login登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {//去login页面，直接放行
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
