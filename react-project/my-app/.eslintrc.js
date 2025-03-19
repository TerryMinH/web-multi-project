/*
 * @Author: TerryMin
 * @Date: 2025-02-20 10:57:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-19 08:55:45
 * @Description: file not
 */
module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
    },
  },
  rules: {
    "no-undef": "off",
    // 其他规则
  },
};
