<!--
 * @Author: TerryMin
 * @Date: 2023-01-02 09:51:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-05 15:28:12
 * @Description: file not
-->

# [Npm](https://www.npmjs.com/)

- npm 相关配置资源

  1.  [npm script 配置](http://ruanyifeng.com/blog/2016/10/npm_scripts.html)

- package.json 配置

  ```
  "main":"index.js", // npm require commonjs包入口
  "module":"index.mjs", // ES module 入口
  "bin":{ // 可执行人间入口
    "vue-cli":"./bin/basic"
  },
  "types":"index.d.ts", // 类型入口
  "type":"module", // node环境适用ESM模块方式
  "exports":{ // 外部暴露模块入口
    "./index.css":"./index.css"
  }
  ```
