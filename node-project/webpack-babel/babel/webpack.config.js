/*
 * @Author: TerryMin
 * @Date: 2023-03-11 09:36:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-11 10:34:07
 * @Description: file not
 */
const path = require("path");
module.exports = {
  entry: "./src/a.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "none",
};
