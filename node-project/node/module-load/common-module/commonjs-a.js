/*
 * @Author: TerryMin
 * @Date: 2024-09-18 10:13:42
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-18 10:18:47
 * @Description: file not
 */
const path = require("path");

module.exports = {
  resolvePath: (dir) => {
    console.log("resolvePath==>", __dirname);
    console.log(path.resolve(__dirname, dir));
  },
  handlePathApi: () => {
    const _extname = path.extname("index.js");
    const _basename = path.basename("index.js", ".js");
  },
};
