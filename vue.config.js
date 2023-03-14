module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://my-json-server.typicode.com/sanctogiacomo/tracker-app/tasks',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  transpileDependencies: true,
  lintOnSave:false
}

