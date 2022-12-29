export default {
    state:{
        isCollapse:false,//控制菜单是展开还是收起
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:'home'
            }
        ]
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
            //判断添加数据是否为首页
            if(val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                //如果不存在
                if(index === -1){
                    state.tabsList.push(val)
                }
            }
        }
    }
    
}

