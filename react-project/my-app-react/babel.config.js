/*
 * @Author: TerryMin
 * @Date: 2025-03-19 08:29:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-19 08:51:10
 * @Description: file not
 */
module.exports = {
  presets: ["react-app"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
};
