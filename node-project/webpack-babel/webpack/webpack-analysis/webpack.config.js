/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:47:19
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 20:06:49
 * @Description: file not
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MyWebpackPlugin = require("./myWebpackPlugin");

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // 服务器根目录，通常是输出目录
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // 端口号，默认是 8080
    port: 3000,
    // 自动打开浏览器
    open: true,
    // 启用热更新
    hot: true,
  },
  plugins: [
    new MyWebpackPlugin(),
    new webpack.DefinePlugin({
      QTRR: JSON.stringify(process.env.NODE_ENV_QDRR),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "template/index.html",
      // title: 'webpack',
      inject: true, // true：默认值，script标签位于html文件的 body 底部
      hash: true, // 在打包的资源插入html会加上hash
      //  html 文件进行压缩
      minify: {
        removeComments: false, //去注释
        collapseWhitespace: false, //压缩空格
        removeAttributeQuotes: false, //去除属性引用
      },
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
