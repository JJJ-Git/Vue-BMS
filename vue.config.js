// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // devServer,
//   devServer: {
//     host: '0.0.0.0',
//     port: 9999,
//     autoOpenBrowser: false,
//   }
// })

const base = 'https://192.168.1.69:8081';
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? './' : './',
  // outputDir: 'testDist',
  lintOnSave: process.env.NODE_ENV === 'development',
  // devServer,
  devServer: {
    open: true,
    host: 'localhost',
    port: 9999,
    // autoOpenBrowser: true,
    // disableHostCheck: true, // webpack4.0 开启热更新
    proxy: {
      '/api': {
        target: base,
        changeOrigin: true,
        // secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}