export const devRoot = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    port: 5445,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  devtool: 'inline-source-map',
}
