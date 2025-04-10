<!--
 * @Author: TerryMin
 * @Date: 2023-01-02 09:51:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 14:25:49
 * @Description: file not
-->

# [Npm](https://www.npmjs.com/)

- npm 相关配置

  1.  [npm script 配置](http://ruanyifeng.com/blog/2016/10/npm_scripts.html)

  ```json
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

- npm 资源

  1. [npm 包发布](https://www.kancloud.cn/outsider/clitool/313178)
  2. (node_module 扁平化代码组织方式)[https://mp.weixin.qq.com/s/Oaq9JTSOHwO_sziNWESV1g]
  3. [统一导出资源](https://blog.csdn.net/chengqige/article/details/121221779)
  4. 以 @ 开头的文件或文件夹在 Node.js 项目中通常用于表示命名空间或组织范围的模块，有助于组织、区分和管理不同的模块和项目变体。

  ```js
  例如，一个使用 TypeScript 的项目可能会安装 @types 命名空间下的类型定义文件，这些文件用于提供 TypeScript 对特定模块的类型信息。
  ```
