const getters = {
    sidebar: state => state.app.sidebar,
    tabsList: state => state.app.tabsList,
    token:state => state.user.token,
    avatar:state => state.user.avatar
}

export default getters