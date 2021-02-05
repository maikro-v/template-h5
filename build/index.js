const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  isDev,
  /**
   * 静态资源路径
   */
  publicPath: '/',
  /**
   * 反响代理
   */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.aitelink.com'
      }
    }
  }
}
