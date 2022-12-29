<template>
  <div class="hander-container">
    <div class="l-container" >
        <el-button @click="handleMenu" icon="el-icon-s-unfold" style="font-size:20px;margin-right: 20px;" size="mini"></el-button>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/" >
            <el-breadcrumb-item  v-for="item in tabsList" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="r-container">
        <el-dropdown>
            <span class="el-dropdown-link">
                <i class="el-icon-s-promotion el-icon--right" style="font-size:24px;margin-right:20px;color:black;"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
    name:'NavBar',
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu');
        }
    },
    computed: {
        ...mapGetters([
            'tabsList'
        ])
    }
}
</script>

<style lang="less" scoped>
.hander-container {
    height:50px;
    // padding: 0 20px;
    display: flex;
    justify-content: space-between;
    border:1px solid #e6e6e6;
    align-items: center;
    .el-button {
        color:#000;
    }
    .text {
        color:#97a8be;
        font-size: 14px;
        margin-left: 10px;
    }
}
.l-container {
    display: flex;
    align-items: center;
}

</style>