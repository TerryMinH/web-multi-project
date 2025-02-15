<!--
 * @Author: TerryMin
 * @Date: 2025-01-07 11:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-15 11:24:52
 * @Description: file not
-->

# Vue & React & 小程序

## 如何进行前端性能优化?

1. 网络层面优化:
   1.1 减少 http 请求: 使用工具对代码进行压缩。将多个 CSS(mini-css-extract-plugin) 文件合并为一个，多个 JavaScript 文件合并为一个,使用 base64 表示简单的图片,减少 HTTP 请求次数。

   1.2 减少资源体积:js 压缩(terser-webpack-plugin)、css 压缩(css-minimizer-webpack-plugin)、图片压缩、gzip 压缩

   1.3 缓存:

   - DNS(（Domain Name System) 缓存:由于浏览器会在 DNS 解析步骤中消耗一定的时间，所以，对于一些高访问量网站来说，做好 DNS 的缓存工作，就会一定程度上提升网站效率
   - CDN(Content Delivery Network) 缓存:CDN 作为静态资源文件的分发网络，本身就已经提升了，网站静态资源的获取速度，加快网站的加载速度，同时也给静态资源做好缓存工作，有效的利用已缓存的静态资源，加快获取速度
   - HTTP 缓存:也是给资源设定缓存时间，防止在有效的缓存时间内对资源进行重复的下载，从而提升整体网页的加载速度[缓存](https://www.cnblogs.com/terrymin/p/13717855.html)

2. 资源(图片、脚本、CSS 样式)优化:
   2.1 图片懒加载: 可以使用 IntersectionObserver API 实现图片懒加载
   2.2 JS 模块按需加载:使用动态导入（Dynamic Import）来按需加载 JavaScript 模块，避免一次性加载所有的 JavaScript 代码。

   2.3 预加载与预渲染: 对于重要的资源（如关键的脚本和样式表），使用预加载（<link rel="preload">）提前加载到浏览器缓存中。对于一些可能会被用户访问的页面，使用预渲染（<link rel="prerender">）提前在后台渲染，当用户访问时可以立即显示
   2.4 预渲染(渲染方式分为三种:客户端渲染,服务端渲染,预渲染)

   - 服务端渲染(Server-Side Rendering，SSR):
     在服务端渲染模式下，服务器在接收到客户端请求后，会将页面的初始 HTML 内容生成并发送给客户端。客户端接收到 HTML 后，进行解析和渲染，最终呈现给用户。在这种模式下，页面的大部分内容在服务器端已经渲染完成，因此页面加载速度相对较快，并且对搜索引擎友好。但是，交互式的内容和功能需要等待客户端的 JavaScript 代码执行完成后才能实现。对应的库(Next.js:基于 React 的 SSR 框架,Nuxt.js:基于 Vue 的 SSR 框架)

   - 客户端渲染（Client-Side Rendering，CSR）:
     在客户端渲染模式下，服务器返回一个基本的 HTML 页面结构和一些必要的 JavaScript 和 CSS 文件。然后，客户端的浏览器通过执行 JavaScript 代码来请求数据，并根据数据动态生成页面内容。这种模式下，页面的渲染过程主要由客户端的浏览器完成，可以实现更丰富的交互和动态内容。但是，初始加载时需要下载和执行大量的 JavaScript 代码，页面加载速度相对较慢，对搜索引擎的可访问性较差。对应的库(React,Vue)

   - 预渲染:
     就是将浏览器解析 javascript 动态渲染页面的这部分工作，在打包阶段就完成了，（只构建了静态数据）换个说法在构建过程中，webpack 通过使用 prerender-spa-plugin 插件生成静态结构的 html

3. DOM 层面优化:
   3.1 重绘和回流:
   重绘:是指当元素的外观（如颜色、背景色、边框颜色等不影响布局的样式）发生改变时，浏览器重新绘制该元素的过程。它不会引起页面布局的重新计算。

   回流:即重排，是指当 DOM 的结构或者元素的几何属性（如宽度、高度、位置、浮动等）发生变化时，浏览器需要重新计算元素的布局，并重新绘制受影响的部分。回流的性能开销比重绘要大得多，因为它涉及到重新布局整个页面或者部分页面。

4. 复杂的脚本执行性能问题:
   4.1 减少 DOM 操作:使用文档片段（DocumentFragment）来批量处理 DOM 节点，最后再将文档片段插入到 DOM 树中。
   4.2 防抖与节流
   4.3 使用 Web Workers:对于一些耗时的计算任务，可以将其放到 Web Workers 中执行，避免阻塞主线程。Web Workers 可以在后台线程中独立运行，不会影响页面的渲染和交互。

5. 虚拟列表滚动优化:

## Vue

1. [手写 Vue-router 核心原理](https://cloud.tencent.com/developer/article/1880448)

2. Vue2 和 Vue3 有哪些区别？
