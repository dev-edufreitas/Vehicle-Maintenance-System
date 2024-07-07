const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    },
    host: '0.0.0.0', // Permitir conexões de qualquer IP
    port: 8080,
    allowedHosts: 'all', // 'all' é suportado, mas pode ser removido para teste
    hot: true,
    client: {
      webSocketURL: 'ws://localhost:8080/ws', // Ajustado para Docker
    },
    watchFiles: {
      paths: ['src/**'],
      options: {
        usePolling: true,
        poll: 1000, // Check for changes every 1 second
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          hotReload: true // Adicione esta linha
        }
        return options
      })
  }
})
