<!--
 * @Author: TerryMin
 * @Date: 2024-12-31 13:59:33
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-18 09:14:50
 * @Description: file not
-->

# JS 学习（多看官网一手资料,碎片化知识学习组建不了知识系统）

[互联网开发文档](https://wangdoc.com/)

## 面试计划

1.  2024.12.27 通知被裁（2025.2.28 正式离职）
2.  从现在开始、合理规划好每一天的时间、保持危机意识
3.  年前主要准备面试题和熟悉面试流程:
    - 2.10 到 2.12 准备面试题(1.11回家、2.09回上海)
    - 2.13 投简历面试
    - 2.28 拿离职证明

## 面试问题

### HTML & CSS

1. window.onload 与 DOMContentLoaded 区别
   window.onload 是在整个页面(包括文档内容、样式表、脚本、图片等所有外部资源)完全加载完成后才会触发
   DOMContentLoaded 是在浏览器已经完成 HTML 文档解析、构建好 DOM 树之后就会触发。

2. [Flex 布局：flex:1 与 flex:auto 详解](https://www.cnblogs.com/terrymin/p/14654621.html)

### JavaScript

1. 事件循环:
   事件循环是 JavaScript 处理异步任务的机制。JavaScript 是单线程的，但它通过事件循环实现了非阻塞的异步操作。事件循环的核心是不断地从任务队列中取出任务并执行。
   1.1 执行顺序：
   执行当前调用栈中的同步代码。
   当调用栈为空时，检查微任务队列并执行所有微任务。
   微任务执行完毕后，从任务队列中取出一个宏任务执行。
   重复上述过程。
   1.2 任务队列（Task Queue）:
   也称为宏任务队列（Macrotask Queue），存放的是宏任务，如 script脚本、setTimeout、setInterval、I/O 操作、UI 渲染等。
   微任务队列（Microtask Queue）：存放的是微任务，如 Promise.then、MutationObserver、queueMicrotask 等。

   ```js
   // 这里有个重要的点，就是await会将后续代码阻塞进微任务队列
   console.log("script start");

   async function async1() {
     await async2();
     console.log("async1 end");
   }
   async function async2() {
     console.log("async2 end");
   }
   async1();
   setTimeout(function () {
     console.log("setTimeout");
   }, 0);
   new Promise(function (resolve, reject) {
     console.log("promise");
     resolve();
   })
     .then(() => {
       console.log("then1");
     })
     .then(() => {
       console.log("then2");
     });
   console.log("script end");
   ```

2. 闭包:
   是指有权访问另外一个函数作用域中的变量的函数。创建闭包的常见方式就是在一个函数内部创建另外一个函数

3. 事件代理:
   事件代理（ Event Delegation ），又称之为事件委托。“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。使用事件代理的好处是可以提高性能。
   可以大量节省内存占用，减少事件注册，比如在 table 上代理所有 td 的 click 事件就非常棒。
   可以实现当新增子对象时无需再次对其绑定。

### ES6 与 Typescript
