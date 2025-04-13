<!--
 * @Author: TerryMin
 * @Date: 2023-02-13 17:45:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 09:40:37
 * @Description: file not
-->

# Vue 源码阅读

- 源码阅读技巧与资源

  - [源码阅读技巧](https://juejin.cn/post/7079706017579139102)
  - [Vue3 源码目录](https://blog.csdn.net/qq_36131788/article/details/116646071)

- Vue 源码基础知识解析

  1. [Vue 不同构建版本的区别](https://juejin.cn/post/7043991342166310942)

  2. [Vue 两个不同版本的选择](https://blog.csdn.net/Marker__/article/details/105402455)

     （1）完整版：vue.js、（2）只包含运行时版：vue.runtime.js 下面说一下它们之间的差异：

     完整版：同时包含编译器和运行时的版本（compiler + runtime）。

     编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码（compiler）。

     运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切（runtime）。

     推荐使用 vue.runtime.js 非完整版，然后配合 vue-loader 和 \*.vue 文件思路，这样可以保证用户体验，同时用户下载的 JS 文件体积更小

     - 源码不同文件命名对应的场景:

     ```js
     // 服务端渲染。 通过 `require()` 在 Node.js 服务器端渲染使用。
     vue.cjs.js;
     vue.cjs.prod.js;

     // 使用构建工具，如 `webpack`，`rollup` 和 `parcel` 等打包出来的工程项目
     vue.esm - bundler.js;
     vue.runtime.esm - bundler.js;

     // 通过浏览器中的 `<script src="...">` 直接使用，暴露全局Vue
     vue.global.js;
     vue.global.prod.js;
     vue.runtime.global.js;
     vue.runtime.global.prod.js;

     // 在浏览器中通过 `<script type="module">` 来使用（浏览器原生 ES 模块导入使用）
     vue.esm - browser.js;
     vue.esm - browser.prod.js;
     vue.runtime.esm - browser.js;
     vue.runtime.esm - browser.prod.js;
     ```
