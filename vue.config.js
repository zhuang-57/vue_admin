const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

// 'use strict'
// const path = require('path')


// function resolve(dir) {
//   return path.join(__dirname, dir)
// }


// module.exports = {
//   lintOnSave: false,
//   transpileDependencies: true,
//   configureWebpack: (config) => {
//     config.resolve = {
//       extensions: ['.js', '.json', '.vue'],
//       alias: {
//         '@': path.resolve(__dirname, './src'),
//         // 使用完整的vue.js
//         'vue': 'vue/dist/vue.js'
//       }
//     }
//   },
//   chainWebpack(config) {
//     config.module
//       .rule("svg")
//       .exclude.add(resolve("src/icons"))
//       .end();
//     config.module
//       .rule("icons")
//       .test(/\.svg$/)
//       .include.add(resolve("src/icons"))
//       .end()
//       .use("svg-sprite-loader")
//       .loader("svg-sprite-loader")
//       .options({
//         symbolId: "icon-[name]",
//       })
//       .end();
//   },
// }