// 该文件用于创建整个应用的路由器

import Vue from 'vue'
// 引入vue-router路由插件
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import layout from '@/views/layout/Layout'
// 引入路由
export const constantRouterMap = [
    {
        path: '/login',
        component: () => import('@/views/login'),
        hidden: true,
    },
    // {
    //     path: '/404',
    //     // component: () => import('@views/404'),
    //     hidden: true,
    // },
    {
        path: '/',
        component: layout,
        redirect: '/home',
        children: [{
            //嵌套路由
            path: 'home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: { title: '首页', icon: 'home' },
        }]
    },
    {
        path:'/pms',
        component:layout,
        redirect:'/product',
        name:'pms',
        // meta:{title:'商品',icon:'product'},
        children:[{
            path:'product',
            name:'product',
            component:() => import('@/views/pms/product')
        },
        {
            path:'addProduct',
            name:'addProduct',
            component:() => import('@/views/pms/addProduct')
        },
        {
            path:'productCate',
            name:'productCate',
            component:() => import('@/views/pms/productCate')
        },
        {
            path:'productAttr',
            name:'productAttr',
            component:() => import('@/views/pms/productAttr')
        },
        {
            path:'brand',
            name:'brand',
            component:() => import('@/views/pms/brand')
        }
    ]
    },
    {
        path:'/oms',
        component:layout,
        redirect:'/order',
        name:'oms',
        children:[{
            path:'order',
            name:'order',
            component:() => import('@/views/oms/order')
        },
        {
            path:'orderSetting',
            name:'orderSetting',
            component:() => import('@/views/oms/orderSetting')
        },
        {
            path:'returnApply',
            name:'returnApply',
            component:() => import('@/views/oms/returnApply')
        },
        {
            path:'returnReason',
            name:'returnReason',
            component:() => import('@/views/oms/returnReason')
        }
    ]
    },
    {
        path:'/sms',
        component:layout,
        redirect:'/flash',
        name:'sms',
        children:[{
            path:'flash',
            name:'flash',
            component:() => import('@/views/sms/flash')
        },
        {
            path:'coupon',
            name:'coupon',
            component:() => import('@/views/sms/coupon')
        },
        {
            path:'brand',
            name:'brandRecommendation',
            component:() => import('@/views/sms/brandRecommendation')
        },
        {
            path:'hot',
            name:'hot',
            component:() => import('@/views/sms/hot')
        },
        {
            path:'new',
            name:'new',
            component:() => import('@/views/sms/new')
        },
        {
            path:'subject',
            name:'subject',
            component:() => import('@/views/sms/subject')
        },{
            path:'advertise',
            name:'advertise',
            component:() => import('@/views/sms/advertise')
        }
    ]
    },
    {
        path:'/ums',
        component:layout,
        redirect:'/admin',
        name:'ums',
        children:[{
            path:'admin',
            name:'admin',
            component:() => import('@/views/ums/admin')
        },
        {
            path:'role',
            name:'role',
            component:() => import('@/views/ums/role')
        },
        {
            path:'menu',
            name:'menu',
            component:() => import('@/views/ums/menu')
        },
        {
            path:'resource',
            name:'resource',
            component:() => import('@/views/ums/resource')
        }
    ]
    }
]
export const asyncRouterMap = [
    
]
// 暴露router
export default new VueRouter({
    routes:constantRouterMap
})