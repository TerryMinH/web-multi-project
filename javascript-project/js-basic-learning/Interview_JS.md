<!--
 * @Author: TerryMin
 * @Date: 2024-12-31 13:59:33
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-03 11:30:07
 * @Description: file not
-->

# JS 学习（多看官网一手资料,碎片化知识学习组建不了知识系统）

[互联网开发文档](https://wangdoc.com/)

## 面试计划

1.  2024.12.27 通知被裁（2025.2.28 正式离职）
2.  从现在开始、合理规划好每一天的时间、保持危机意识
3.  年前主要准备面试题和熟悉面试流程:
    - 2.10 到 2.12 准备面试题(1.11 回家、2.09 回上海)
    - 2.13 投简历面试
    - 2.28 拿离职证明

## HTML

- window.onload 与 DOMContentLoaded 区别
  window.onload 是在整个页面(包括文档内容、样式表、脚本、图片等所有外部资源)完全加载完成后才会触发
  DOMContentLoaded 是在浏览器已经完成 HTML 文档解析、构建好 DOM 树之后就会触发。

## CSS 常见面试题

- [Flex 布局：flex:1 与 flex:auto 详解](https://www.cnblogs.com/terrymin/p/14654621.html)

- [盒模型理解](https://www.cnblogs.com/terrymin/p/14586108.html)
  2.1 对于行级元素，margin-top 和 margin-bottom 对于上下元素无效，margin-left 和 margin-right 有效。
  2.2 对于相邻的块级元素 margin-bottom 和 margin-top 取值方式:
  2.2.1 都是正数: 取最大值,距离=Math.max(margin-botton,margin-top)
  2.2.2 都是负数: 取最小值,距离=Math.min(margin-botton,margin-top)
  2.2.3 上面是正数，下面是负数或者 上面是负数，下面是正数: 正负相加,距离=margin-botton+margin-top

- CSS 有哪些选择器

  1.  元素选择器
  2.  类选择器
  3.  ID 选择器:通过元素的 id 属性来选择元素，ID 名前需要加上 #。一个 HTML 文档中，每个元素的 id 应该是唯一的
  4.  属性选择器:根据元素的属性或属性值来选择元素。
  5.  伪类选择器:用于选择处于特定状态的元素，如链接的不同状态、元素的第一个子元素等。伪类名前需要加上 :。
  6.  伪元素选择器:用于选择元素的特定部分，如元素的第一个字母、第一行等。伪元素名前需要加上 ::。

  ```js
    /* 选择每个 <p> 元素的第一个字母 */
      p::first-letter {
          font-size: 24px;
      }

      /* 选择每个 <p> 元素的第一行 */
      p::first-line {
          color: brown;
      }

      /* 在每个 <p> 元素的内容前面插入一些文本 */
      p::before {
          content: ">> ";
      }

      /* 在每个 <p> 元素的内容后面插入一些文本 */
      p::after {
          content: " <<";
      }
  ```

  7.  组合选择器:通过组合多个选择器来更精确地选择元素。

  ```js
    /* 后代选择器：选择 <div> 元素内的所有 <p> 元素 */
    div p {
        background-color: lightgray;
    }

    /* 子选择器：选择 <div> 元素的直接子元素 <p> */
    div > p {
        font-style: italic;
    }

    /* 相邻兄弟选择器：选择紧跟在 <h2> 元素后面的 <p> 元素 */
    h2 + p {
        color: orange;
    }

    /* 通用兄弟选择器：选择 <h2> 元素后面的所有 <p> 元素 */
    h2 ~ p {
        text-decoration: underline;
    }
  ```

## JavaScript

- 事件循环:
  事件循环是 JavaScript 处理异步任务的机制。JavaScript 是单线程的，但它通过事件循环实现了非阻塞的异步操作。事件循环的核心是不断地从任务队列中取出任务并执行。

  1.  执行顺序：
      执行当前调用栈中的同步代码。
      当调用栈为空时，检查微任务队列并执行所有微任务。
      微任务执行完毕后，从任务队列中取出一个宏任务执行。
      重复上述过程。
  2.  任务队列（Task Queue）:
      也称为宏任务队列（Macrotask Queue），存放的是宏任务，如 script 脚本、setTimeout、setInterval、I/O 操作、UI 渲染等。
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

- 闭包:

  1. 定义:是指有权访问另外一个函数作用域中的变量的函数。创建闭包的常见方式就是在一个函数内部创建另外一个函数

  2. 用途:
     2.1 读取函数内部的变量
     2.2 让这些变量的值始终保持在内存中。
     2.3 方便调用上下文的局部变量。利于代码封装。

  3. 缺点:闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。

- 事件代理:
  事件代理（ Event Delegation ），又称之为事件委托。“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。使用事件代理的好处是可以提高性能。
  可以大量节省内存占用，减少事件注册，比如在 table 上代理所有 td 的 click 事件就非常棒。
  可以实现当新增子对象时无需再次对其绑定。

- 说说什么是原型链?

  1.  定义: 原型链是 JavaScript 中实现继承的一种主要方式。在 JavaScript 里，每个对象都有一个内部属性 [[Prototype]]（在浏览器环境下可以通过 **proto** 属性访问），它指向该对象的原型对象。而这个原型对象同样也有自己的原型对象，以此类推，直到最顶层的原型对象 Object.prototype，其 [[Prototype]] 为 null。这种通过 [[Prototype]] 属性层层相连形成的链条就被称作原型链。
  2.  原理:当访问一个对象的属性或方法时，JavaScript 引擎首先会在该对象本身查找，如果找不到，就会顺着原型链向上，在其原型对象中查找，若还未找到，会继续在原型对象的原型对象中查找，如此递归，直至找到该属性或方法，或者到达原型链的顶端（即 Object.prototype 且其 [[Prototype]] 为 null），此时返回 undefined。
  3.  作用:实现继承,避免代码重复，提高代码的复用性和可维护性。代码复用：多个对象可以共享原型对象上的属性和方法，减少内存开销。

- [JS 继承的几种方式](https://www.cnblogs.com/terrymin/p/14630479.html)

- 谈谈你对内存泄漏的理解

  1. 内存泄漏产生原因:在 JavaScript 里，内存管理采用的是自动垃圾回收机制（Garbage Collection，简称 GC）。垃圾回收器会定期找出那些不再被引用的对象，并释放它们所占用的内存。但当某些对象不再被使用，却因为代码中的错误或不合理设计，仍然被其他对象引用着，垃圾回收器就无法回收这些对象的内存，从而造成内存泄漏。

  2.常见内存泄漏场景及解决方式:

      2.1 全局变量的滥用:函数外部或者函数内部声明不使用 var、let、const 关键字声明变量,只要程序不结束,全局变量就一直存在。
      2.2 未清除的定时器和回调函数:使用 setInterval 或 setTimeout 创建的定时器
      2.3 闭包的不合理使用
      2.4 DOM 元素的引用问题:如果在 JavaScript 中保留了对 DOM 元素的引用，即使这些 DOM 元素已经从页面中移除，由于引用的存在，这些 DOM 元素所占用的内存也无法被回收。

  3. 垃圾回收方式:标记清除和引用计数两种,但是引用计数存在循环引用的问题。

### ES6 与 Typescript
