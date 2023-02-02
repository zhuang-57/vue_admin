<template>
    <div class="app-wrapper" :class="classObj">
        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <navbar />
            <app-main />
        </div>
    </div>
</template>

<script>
import { Sidebar, Navbar, AppMain} from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default{
    name:'layout',
    components:{
        Sidebar,
        Navbar,
        AppMain
    },
    mixins: [ResizeMixin],
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar
        },
        device() {
            return this.$store.state.app.device
        },
        classObj() {//用来显示隐藏整个侧边栏
            return {
                hideSidebar: !this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === 'mobile'//移动
            }
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper{
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}

</style>