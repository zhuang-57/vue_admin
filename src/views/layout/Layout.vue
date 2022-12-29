<template>
    <div class="app-wrapper">
        <el-container>
            <el-aside width="auto">
                <side-bar/>
            </el-aside>
        <el-container>
            <el-header>
                <nav-bar/>
            </el-header>
            <el-main>
                <!-- 路由出口，路由匹配到的组件将渲染到这里 -->
                <router-view/>
            </el-main>
         </el-container>
</el-container>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar/index.vue'
import NavBar from '@/components/NavBar/index.vue'
export default{
    name:'Layout',
    components:{SideBar,NavBar}
}
</script>

<style scoped>
.app-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
}
.el-header {
    padding: 0;
}
</style>