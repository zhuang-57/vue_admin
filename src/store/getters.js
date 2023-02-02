const getters = {
    sidebar: state => state.app.sidebar,//侧边栏
    device:state => state.app.device,
    token:state => state.user.token,
    avatar:state => state.user.avatar,
    name:state => state.user.name,
    roles: state => state.user.roles,//登录之后进入首页之前判断一下是否获取角色信息
    addRouters: state => state.permission.addRouters,
    routers: state => state.permission.routers
}

export default getters