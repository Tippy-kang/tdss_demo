const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  outputDir: 'dist', // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  assetsDir: 'static', // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  lintOnSave: process.env.NODE_ENV === 'development', // 是否开启eslint保存检测，有效值：ture | false | 'error'
}) 
