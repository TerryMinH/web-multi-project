/*
 * @Author: TerryMin
 * @Date: 2022-09-15 09:28:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-20 11:15:51
 * @Description: file not
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
