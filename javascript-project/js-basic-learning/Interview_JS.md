<!--
 * @Author: TerryMin
 * @Date: 2024-12-31 13:59:33
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-08 11:10:10
 * @Description: file not
-->

# JS 学习

[互联网开发文档](https://wangdoc.com/)

## 面试

- 面试规划:

  1.  2024.12.27 通知被裁（2025.2.28 正式离职）
  2.  从现在开始、合理规划好每一天的时间、保持危机意识
  3.  年前主要准备面试题和熟悉面试流程:
      - 2.10 到 2.12 准备面试题(1.11 回家、2.09 回上海)
      - 2.13 投简历面试
      - 2.28 拿离职证明

- 面试技巧:

  1. 简单的问题回答全面
  2. 复杂的问题回答到核心的点
  3. 面试是一个相互的过程，信心

- 面试感悟:

  1. 面试也是构建自己知识框架的一个过程,多复习多复盘,平时工作要有意识去完善自己的**知识广度和深度**。
  2. 多看官网一手资料,碎片化知识学习很难形成完整的知识体系。

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

- BFC(Block formatting context):

  1. 定义:称为块级格式化上下文，是 CSS 中的一种渲染机制。它决定了块级元素如何对它的子元素内容进行布局，以及与子元素同级别的兄弟元素的关系和相互作用
  2. BFC 解决的问题:
     2.1 使用 Float 脱离文档流，高度塌陷
     2.2 Margin 边距重叠
     2.3 非浮动元素会覆盖浮动元素的位置
  3. 如何触发 BFC:
     3.1 float 的值不为 none
     3.2 overflow 的值不为 visible
     3.3 display 的值为 table-cell、table-caption 和 inline-block 之一
     3.4 position 的值不为 static 或者 releative 中任何一个

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
  3.  注意: requestAnimationFrame 既不是宏任务也不是微任务，是浏览器提供的一个用于优化动画效果的 API

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

- 普通函数与箭头函数区别:

  1.  定义语法:
      1.1 普通函数：使用 function 关键字来定义，可以是具名函数，也可以是匿名函数。
      1.2 箭头函数：使用箭头 => 来定义，语法更加简洁。如果函数体只有一条语句，可以省略 return 关键字和大括号；如果只有一个参数，还可以省略括号。
  2.  this 指向:
      2.1 普通函数：this 的指向在函数调用时动态确定，取决于函数的调用方式。常见的调用方式有全局调用、函数调用、方法调用、构造函数调用和 call、apply、bind 调用，不同的调用方式会使 this 指向不同的对象。
      2.2 箭头函数：this 的指向继承自外层函数或全局作用域，在定义时就确定了，不会随调用方式的改变而改变。
  3.  参数处理
      3.1 普通函数：可以使用 arguments 对象来获取函数调用时传递的所有参数，arguments 是一个类数组对象。
      3.2 箭头函数：没有自己的 arguments 对象，如果需要获取参数，可以使用剩余参数语法 ...args。
  4.  使用限制
      4.1 普通函数：可以使用 new 关键字作为构造函数来创建对象实例，也可以使用 yield 关键字定义生成器函数。
      4.2 箭头函数：不能使用 new 关键字作为构造函数，因为它没有自己的 this 和 prototype，也不能使用 yield 关键字。

- [this 绑定问题](https://segmentfault.com/a/1190000040823905)

  1. this 绑定优先级：new 关键字 > 显式绑定 > 隐式绑定 > 默认绑定
  2. 间接函数引用：指的是通过变量、对象属性或数组元素等方式来引用函数，而不是直接使用函数名来调用函数。间接函数引用可能会改变 this 的指向，尤其是当函数从对象的方法赋值给变量或存储在数组中时，this 不再指向原对象。

## ES6 与 Typescript

- var、let、const 区别:

  1.  作用域：
      1.1 var: 声明的变量具有函数作用域，即在整个函数中都是可见的。声明的变量会影响到外部作用域。
      1.2 let 和 const: 声明的变量具有块级作用域，由{}界定，如 if 语句块，for 循环块。变量只在它声明的块级作用域内可见。声明的变量不会影响到外部作用域。
  2.  变量提升：
      2.1 var:var 声明的变量会发生变量提升，即变量可以在声明之前使用，但是值是 undfined.
      2.2 let 和 const:let 和 const 声明的变量 存在“暂时性死区”(在变量声明之前访问它会导致 ReferenceError)。
  3.  重复声明：
      3.1 var：可以在同一作用域内使用 var 重复声明同一个变量，后面的声明会覆盖前面的声明。
      3.2 let 和 const：在统一作用域内，let 和 const 不允许重复声明同一个变量，否则会抛出 SyntaxError。

- 取消网络请求

  1. AbortController 是浏览器提供的一个 Web API，用于在 Fetch API 和 XMLHttpRequest 中取消请求

  ```js
  // 创建一个AbortController实例
  const controller = new AbortController();
  const signal = controller.signal;

  fetch("https://example.com/api/data", { signal })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("请求已被取消");
      } else {
        console.log("请求出错", error);
      }
    });

  // 在需要取消请求的地方调用
  controller.abort();
  ```

  2. 使用 XMLHttpRequest 的 abort 方法

  ```js
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://example.com/api/data", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.log("请求出错");
      }
    }
  };
  xhr.send();

  // 在需要取消请求的地方调用
  xhr.abort();
  ```

  3. Axios 中取消请求:axios 取消网络请求的原理是通过 CancelToken 注册取消回调，在需要时触发回调来中断请求，并通过不同的请求适配器实现具体的取消操作。
     底层实现:
     3.1 浏览器环境中: XMLHttpRequest 适配器
     3.2 Node 环境中:http 适配器,使用 http 模块发起请求时，cancel 函数会调用 request.destroy() 方法来取消请求。request.destroy() 会关闭底层的 TCP 连接，从而终止请求。

  ```js
  import axios from "axios";

  // 创建取消令牌源
  const source = axios.CancelToken.source();

  // 发起请求并传入取消令牌
  axios
    .get("https://api.example.com/data", {
      cancelToken: source.token,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("请求已取消:", error.message);
      } else {
        console.error("请求出错:", error);
      }
    });

  // 取消请求
  source.cancel("用户取消了请求");
  ```

## 常见场景题

- 大文件上传

  1.  切片上传:核心思路是将大文件切割成多个小块，分别上传这些小块，最后在服务器端将这些小块合并成完整的文件。
      1.1 如何保证上传中断文件的完整性:

          1.1.1 本地存储记录:前端每次上传成功一个切片,可以使用本地存储记录对应的切片索引信息,当网络恢复,通过检查在上传未上传的切片
          1.1.2 设置重试机制:为每个切片的上传请求添加重试机制，当请求失败时，自动进行重试。可以设置最大重试次数，避免无限重试。
          1.1.3 后端处理:
              1.1.3.1 切片完整性检查:在服务器端，对于每个接收到的切片，进行完整性检查，例如**计算切片的哈希值（如 MD5、SHA - 1 等）**，并与前端传递的哈希值进行比对，确保切片数据在传输过程中没有损坏。
              1.1.3.2 记录已接收切片信息
              1.1.3.3 合并文件前检查:在进行文件合并操作之前，服务器端需要检查所有切片是否都已经成功接收，并且顺序正确。如果发现有缺失的切片，通知客户端重新上传

      ```js
      const crypto = require("crypto");
      // 计算切片的哈希值
      function calculateHash(chunk) {
        const hash = crypto.createHash("md5");
        hash.update(chunk);
        return hash.digest("hex");
      }

      // 接收切片时进行哈希比对
      app.post("/upload", upload.single("chunk"), (req, res) => {
        const chunk = req.file;
        const receivedHash = calculateHash(fs.readFileSync(chunk.path));
        const expectedHash = req.body.hash;

        if (receivedHash === expectedHash) {
          // 切片完整，进行后续处理
        } else {
          res.status(400).send("切片数据损坏");
        }
      });
      ```

  2.  断点续传:更适用于网络不稳定的场景，如移动网络环境。当网络中断后，用户不需要重新上传整个文件，只需继续上传未完成的部分，节省了时间和流量。例如，在手机端上传大型文件时，使用断点续传可以提高用户体验。
  3.  流上传:大文件流上传采用的是流式处理的方式，它会将文件数据以流的形式逐块读取和发送，而不是一次性将整个文件加载到内存中。这样，内存中只需要存储当前正在处理的小块数据，大大减少了内存的占用，从而避免了因内存不足而导致的卡顿。
  4.  三者区别:
      4.1 切片上传：更适合网络不稳定、文件非常大的场景，能够有效应对网络中断等问题，保证文件上传的完整性。例如，在云存储服务中，用户上传大型视频文件时，通常会采用切片上传的方式。
      4.2 断点续传：切片上传是实现断点续传的基础，断点续传通常依赖于切片上传的技术，因为只有将文件切片后，才能精确地记录上传进度并从断点处继续上传。例如，在手机端上传大型文件时，使用断点续传可以提高用户体验。
      4.3 流上传：适用于网络稳定、文件大小适中且对实时性要求较高的场景，例如实时音视频流的上传。

- 大文件下载

  1. 核心思想: 核心思路是通过设置 HTTP 请求头的 Range 字段，指定每次请求下载的文件字节范围，将大文件分成多个小块进行下载，最后合并这些小块。
  2. 分块下载
  3. 断点续下
  4. HTTP Range 请求
