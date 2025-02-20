module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  devServer: {
    port: 8080,
    open: true
  }
};