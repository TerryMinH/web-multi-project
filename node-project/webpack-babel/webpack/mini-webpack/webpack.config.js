/*
 * @Author: TerryMin
 * @Date: 2022-09-24 14:29:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-24 15:26:22
 * @Description: file not
 */
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
};
