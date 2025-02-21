/*
 * @Author: TerryMin
 * @Date: 2025-02-20 10:57:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-20 11:15:06
 * @Description: file not
 */
module.exports = {
  extends: ["react-app", "react-app/jest"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
    },
  },
  // 其他配置...
};
