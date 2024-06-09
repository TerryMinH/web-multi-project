/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:47:19
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-12-05 09:45:31
 * @Description: file not
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(333, process.env.NODE_ENV_QDRR);
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      QTRR: JSON.stringify(process.env.NODE_ENV_QDRR)
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'template/index.html',
      // title: 'webpack',
      inject: true, // true：默认值，script标签位于html文件的 body 底部
      hash: true, // 在打包的资源插入html会加上hash
      //  html 文件进行压缩
      minify: {
        removeComments: false,               //去注释
        collapseWhitespace: false,           //压缩空格
        removeAttributeQuotes: false         //去除属性引用
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}