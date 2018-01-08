
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.
//使用Node自带的文件路径插件
const path = require('path')

module.exports = {
    //生产环境配置
  build: {
      //http://vuejs-templates.github.io/webpack/backend.html
    // 使用 config/prod.env.js 中定义的编译环境
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'), // 编译注入的 index.html 文件,必须是本地的绝对路径
    assetsRoot: path.resolve(__dirname, '../dist'),// 编译输出的静态资源根路径
    assetsSubDirectory: 'static',// 编译输出的二级目录
    assetsPublicPath: '/',// 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: true,//生成用于生产构建的源映射
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,// 是否开启 gzip
    productionGzipExtensions: ['js', 'css'],// 需要使用 gzip 压缩的文件扩展名
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report//一个实用工具,用于分析项目的依赖关系https://www.npmjs.com/package/webpack-bundle-analyzer
  },
  //开发环境
  dev: {
    env: require('./dev.env'),// 使用 config/dev.env.js 中定义的编译环境
    port: process.env.PORT || 8080,// 运行测试页面的端口
    autoOpenBrowser: true,//是否自动打开浏览器
    assetsSubDirectory: 'static',// 编译输出的二级目录
    assetsPublicPath: '/',// 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {},// 需要 proxyTable 代理的接口（可跨域）http://vuejs-templates.github.io/webpack/proxy.html
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false// 是否开启 cssSourceMap
  }
}
