const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
      app: path.join(__dirname, 'src', 'App.tsx')
  },
  target: 'web',
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: '/node_modules/'
          }
      ],
  },  
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 8080,
    publicPath: '/',
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src', 'index.html')
      })
  ]
}