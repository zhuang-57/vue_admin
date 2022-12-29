<template>
    <div>
      <el-row class="tac">
        <el-col >
        <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#304156"
            text-color="#bfcbd7"
            active-text-color="#409eff ">

            <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
                <i :class="`el-icon-${item.icon}`" style="color:#bfcbd7"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
            <el-submenu  v-for="item in hasChildren" :key="item.label" :index="item.label">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`" style="color:#bfcbd7"></i>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group v-for="subItem in item.children" :key="subItem.name" >
                    <el-menu-item @click="clickMenu(subItem)" :index="subItem.name" :class="`el-icon-${subItem.icon}`">{{subItem.label}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
    export default {
      name:'SideBar',
      data(){
        return{
          menuDate:[
            {
              path:'/',
              name:'home',
              label:'首页',
              icon:'s-home',
              url:'home'
            },
            {
              label:'商品',
              icon:'s-goods',
              children:[
               {
                path: "/pms/product",
                name:"product",
                label:"商品列表",
                icon:"s-unfold",
                url:"/pms/product/index",
               },
               {
                path: "/pms/addProduct",
                name:"addProduct",
                label:"添加商品",
                icon:"zoom-in",
                url:"/pms/addProduct/index",
               },
               {
                path: "/pms/productCate",
                name:"productCate",
                label:"商品分类",
                icon:"menu",
                url:"/pms/productCate/index",
               },
               {
                path: "/pms/productAttr",
                name:"productAttr",
                label:"商品类型",
                icon:"finished",
                url:"/pms/productAttr",
               },
               {
                path: "/pms/brand",
                name:"brand",
                label:"品牌管理",
                icon:"price-tag",
                url:"/pms/brand",
               }
              ]
            },
            {
              label:"订单",
              icon:"s-order",
              children:[
                {
                  path:"/oms/order",
                  name:"order",
                  label:"订单列表",
                  icon:"s-unfold",
                  url:"oms/order",
                },
                {
                  path:"/oms/orderSetting",
                  name:"orderSetting",
                  label:"订单设置",
                  icon:"setting",
                  url:"oms/orderSetting",
                },
                {
                  path:"/oms/returnApply",
                  name:"returnApply",
                  label:"退货申请处理",
                  icon:"s-flag",
                  url:"oms/returnApply",
                },
                {
                  path:"/oms/returnReason",
                  name:"returnReason",
                  label:"退货原因设置",
                  icon:"s-ticket",
                  url:"oms/returnReason",
                }
              ]
            },
            {
              label:"营销",
              icon:"s-claim",
              children:[
                {
                  path:"/sms/flash",
                  name:"flash",
                  label:"秒杀活动列表",
                  icon:"alarm-clock",
                  url:"sms/flash"
                },
                {
                  path:"/sms/coupon",
                  name:"coupon",
                  label:"优惠券列表",
                  icon:"edit-outline",
                  url:"sms/coupon"
                },
                {
                  path:"/sms/brand",
                  name:"brandRecommendation",
                  label:"品牌推荐",
                  icon:"discount",
                  url:"sms/brandRecommendation"
                },
                {
                  path:"/sms/new",
                  name:"new",
                  label:"新品推荐",
                  icon:"news",
                  url:"sms/new"
                },
                {
                  path:"/sms/hot",
                  name:"hot",
                  label:"人气推荐",
                  icon:"medal-1",
                  url:"sms/hot"
                },
                {
                  path:"/sms/subject",
                  name:"subject",
                  label:"专题推荐",
                  icon:"connection",
                  url:"sms/subject"
                },
                {
                  path:"/sms/advertise",
                  name:"advertise",
                  label:"广告列表",
                  icon:"chat-line-square",
                  url:"sms/advertise"
                }
              ]
            },
            {
              label:"权限",
              icon:"key",
              children:[
                {
                  path:"/ums/admin",
                  name:"admin",
                  label:"用户列表",
                  icon:"user",
                  url:"ums/admin"
                },
                {
                  path:"/ums/role",
                  name:"role",
                  label:"角色列表",
                  icon:"s-custom",
                  url:"ums/role"
                },
                {
                  path:"/ums/menu",
                  name:"menu",
                  label:"菜单列表",
                  icon:"rank",
                  url:"ums/menu"
                },
                {
                  path:"/ums/resource",
                  name:"resource",
                  label:"资源列表",
                  icon:"box",
                  url:"ums/resource"
                }
              ]
            }
          ]
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
         //点击菜单，页面跳转
         clickMenu(item){
          // console.log(item)
          if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
            this.$router.push(item.path)
          }
          this.$store.commit('selectMenu',item)
        }
      },
      computed:{
        // 没有子菜单
        noChildren(){
          return this.menuDate.filter(item => !item.children)
        },
        // 有子菜单
        hasChildren(){
          return this.menuDate.filter(item => item.children)
        },
        isCollapse(){
          return this.$store.state.app.isCollapse
        }
       
      }
    }
  </script>
  
  <style lang="less" scoped>
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px!important;
    height: 100vh;
    // transition: width .28s;
    // position: fixed;
    // font-size: 0;
    // top:0;
    // bottom: 0;
    // left: 0;
    // z-index: 1001;
    // overflow: hidden;
  } 
  .el-menu {
    height:100vh;
    border-right: none;
  }
  
  .el-menu-item-group__title {
      padding: 0;
    }
  .el-aside {
    min-width: 180px;
  }
  
  </style>