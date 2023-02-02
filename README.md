1. vue-cil脚手架初始化项目
node + webpack + 淘宝镜像

node-modules文件夹：项目依赖文件夹

public文件夹：一般放置一些静态资源（图片）,

src文件夹（程序员源代码文件夹）：
    assets文件夹：一般放置多组件共用的静态资源
    components文件夹：一般放置非路由组件
    App.vue:唯一的根组件
    main.js:程序入口文件，也是程序中最先执行的文件

babel.config.js:配置文件（Babel相关）

package.json文件：记录项目叫什么，有哪些依赖，怎么运行。

package-lock.json:缓存性文件

README.md:说明性文件

5) 路由组件的搭建
vue-router
路由组件有login,home,layout,oms,pms,sms
路由组件与非路由组件的区别：
-components文件夹：经常放置的非路由组件，一般以标签的形式注册
-pages|views文件夹：经常放置路由组件，一般需要在router文件夹中经行注册
注册完路由，路由组件与非路由组件身上都有$route、$router属性

$route：一般获取路由信息【路由、query、params等】
$router:一般进行编程式导航进行路由跳转【push|replace】

路由的两种跳转？
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace,可以进行路由的跳转，还可以做一些其他业务逻辑

// 在未获取角色时， 在哪里发起异步请求？

