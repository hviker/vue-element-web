const path = require("path");
const proxyConfig = require('./proxy.config.js')
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

console.log(proxyConfig)
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  productionSourceMap: false,
  devServer: {
    port: "8888",
    open: false,
    compress: true,
    // 开发环境设置代理
    // proxy: proxyConfig
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    optimization: {
      usedExports: true,
      runtimeChunk: "single",
    },
    // 生产环境下删除
    // devtools:
    //   process.env.NODE_ENV === "development"
    //     ? "cheap-module-eval-source-map"
    //     : "(none)",
    plugins: [],
  },

  chainWebpack: (config) => {
    // 移除preload、prefetch插件
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // 添加压缩图片loader
    // 由于npm下载可能会出现问题，且在下载其他包时可能会出现再次下载的问题
    // 建议在优化时打开注释并使用cnpm下载
    // config.module
    //   .rule("images")
    //   .use("images")
    //   .loader("image-webpack-loader")
    //   .options({ bypassOnDebug: true })
    //   .end();
    // 排除原webpack配置中使用file-loader对/src/icons的.svg文件的处理
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    // 添加icon配置
    // 对于/src/icons下的.svg文件,使用svg-sprite-loader进行处理，并且命名设置为icon-[name]进行输出
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  },
};
