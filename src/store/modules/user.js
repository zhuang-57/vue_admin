//导入getInfo 获取角色API
import {login, logout, getInfo} from '@/api/login'
import { getToken, setToken,removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name:'',
    avatar:'',
    roles:[]
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state,avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state,roles) => {
      state.roles = roles
    }
  },
  actions: {
    //登录
    //第一个参数是context对象，为了使用方便{commit}析构处理使用，第二个参数接收表单
    Login({commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          const tokenStr = data.tokenHead + data.token
          setToken(tokenStr)//将token往cookie中存一份
          commit('SET_TOKEN', tokenStr)//将token往全局store中存一份
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve,reject) => {
        getInfo().then(response => {
            const data = response.data
            if(data.roles && data.roles.length > 0){
              commit('SET_ROLES',data.roles)
            }else{
              reject('getInfo: roles must be a non-null array !')
            }
            commit('SET_NAME',data.username)
            commit('SET_AVATAR',data.icon)
            resolve(response)
        }).catch(error => {
            reject(error)
        })
      })
    },
    //登出
    LogOut({ commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //前端 登出
    FedLogOut({ commit }){
      return new Promise(resolve => {
        commit('SET_TOKEN','')
        removeToken()
        resolve()
      })
    }
  }
}

export default user