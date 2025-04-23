<!--
 * @Author: TerryMin
 * @Date: 2024-12-31 13:59:33
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-23 11:11:25
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

- 性能优化和项目卡点答题技巧

  - 在回答性能优化相关问题时，建议结合具体项目场景，**突出你的技术深度和解决问题的能力**。通过清晰的逻辑和实际案例，展示你在性能优化方面的经验和成果。

  - 你在项目中遇到哪些问题是如何解决的？(star 法则：问题描述 - 分析原因(多方案对比) - 解决办法 - 经验总结)

    1.  项目工程化优化:
        1.1 咪咕影院 H5 项目版本升级: 该项目由于常年业务迭代,导致页面模块不断累积,开发时编译和打包时间接近 1 分钟多。首先通过 Speed Measure Plugin 和编译耗时相关分析工具进行分析具体原因; 制定优化方案:项目版本升级 webpack5、开启多线程打包、开启 webpack 缓存。
        1.2 Webpack 5 相比 Webpack 4 在打包启动速度上有显著提升: 引入了持久化缓存机制、模块联邦（Module Federation）、优化了模块解析算法和并行处理能力增强、更好的 Tree Shaking 支持
        1.3 经验总结:规范代码开发,通过程序配置层面去控制编码规范

    2.  参与项目微内核系统架构设计开发:
        2.1 视频播放器是一个独立的模块作为内核，广告插件、弹幕插件、会员插件等等

    3.  利用模块联邦提高开发效率:
        3.1 利用模块联邦,页面复用,提高开发效率

## JavaScript

- JS 常考面试题

  1. script 标签有哪些属性?

  2. 两个等于与三个等于区别、 null 与 undefined 是否相等:
     2.1 null 是一个原始值，表示一个空对象指针；undefined 表示变量已声明但未赋值，或者函数没有返回值等情况。null 与 undefined 比较因为它们的数据类型不同，所以使用 === 比较时结果为 false，使用 == 返回 true。
     2.2 == 也被称作宽松相等运算符，在进行比较时，它会尝试对两边的值进行类型转换，然后再比较它们的值是否相等。类型转换规则如下：

     ```js
     // 1. 布尔值与数字比较：布尔值会被转换为数字，true 转换为 1，false 转换为 0，再进行比较。
     console.log(true == 1); // 输出: true
     console.log(false == 0); // 输出: true
     // 2. 字符串与数字比较：字符串会尝试转换为数字后再比较。
     console.log("10" == 10); // 输出: true
     // 3. 对象与基本类型比较：对象会先调用 valueOf() 方法，如果返回的不是基本类型，再调用 toString() 方法，将结果转换为基本类型后进行比较。
     const arr = [10];
     console.log(arr == "10"); // 输出: true
     ```

  3. for in 与 for of 区别:
     3.1 for...in：适用于遍历对象的可枚举属性，包括对象自身和继承的属性，在遍历数组或字符串时会**遍历索引，可能会包含原型链上的属性**。遍历字符串会遍历每个字符索引。
     3.2 for...of：适用于**遍历可迭代对象**，如数组、字符串、Set、Map 等，直接遍历元素值，不涉及对象的属性和原型链。(不能直接用于遍历普通对象)，遍历字符串会遍历每个字符值。

  4. 理解值类型和引用类型

     4.1 存储方式
     4.1.1 值类型：变量直接存储它们的数据值，这些值存储在栈内存中。栈内存的特点是空间较小，但访问速度快。
     4.1.2 引用类型：变量存储的是一个引用（内存地址），而实际的数据值存储在堆内存中。堆内存的特点是空间较大，但访问速度相对较慢。

     ```js
     let arr1 = [1, 2, 3];
     let arr2 = [1, 2, 3];
     let arr3 = arr1;
     console.log(arr1 == arr2); // 输出 false
     console.log(arr1 === arr2); // 输出 false
     console.log(arr1 === arr3); // 输出 true
     ```

     4.2 赋值方式
     4.2.1 值类型：当一个值类型的变量赋值给另一个变量时，会复制该变量的值。这意味着两个变量拥有各自独立的数据副本，对其中一个变量的修改不会影响另一个变量
     4.2.2 引用类型：当一个引用类型的变量赋值给另一个变量时，复制的是引用，而不是实际的数据值。这意味着两个变量指向同一个对象，对其中一个变量的修改会影响另一个变量。

     4.3 比较方式
     4.3.1 值类型：值类型的比较是基于它们的值进行的。如果两个值类型的变量的值相同，则它们相等。
     4.3.2 引用类型：比较是基于它们的引用（内存地址）进行的。只有当两个引用类型的变量指向同一个对象时，它们才相等。

- 事件循环:
  JavaScript 是单线程的，但它通过事件循环实现了非阻塞的异步操作。事件循环的核心是不断地从任务队列中取出任务并执行。

  1.  执行顺序：
      首先 执行当前调用栈中的同步代码。
      然后 当调用栈为空时，检查微任务队列并执行所有微任务。
      最后 当微任务执行完毕后，从任务队列中取出一个宏任务执行。
      重复上述过程。
  2.  任务队列（Task Queue）:
      也称为宏任务队列（Macrotask Queue），存放的是宏任务，如 script 脚本、setTimeout、setInterval、I/O 操作、UI 渲染等。
      微任务队列（Microtask Queue）：存放的是微任务，如 Promise.then、MutationObserver、queueMicrotask 等,process.nextTick 属于微任务，它会在当前阶段结束后立即执行，具有较高的执行优先级。
  3.  注意: requestAnimationFrame 虽然不属于严格的宏任务或微任务分类，但由于其执行时机和特性与宏任务更为接近，因此通常被视为一个特殊的宏任务。

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

  1. extends 关键字实现原理是 通过寄生组合式继承实现

- 谈谈你对内存泄漏的理解

  1. 内存泄漏产生原因:在 JavaScript 里，内存管理采用的是自动垃圾回收机制（Garbage Collection，简称 GC）。垃圾回收器会定期找出那些不再被引用的对象，并释放它们所占用的内存。但当某些对象不再被使用，却因为代码中的错误或不合理设计，仍然被其他对象引用着，垃圾回收器就无法回收这些对象的内存，从而造成内存泄漏。

  2.常见内存泄漏场景及解决方式:

      2.1 全局变量的滥用:函数外部或者函数内部声明不使用 var、let、const 关键字声明变量,只要程序不结束,全局变量就一直存在。
      2.2 未清除的定时器和回调函数:使用 setInterval 或 setTimeout 创建的定时器
      2.3 闭包的不合理使用
      2.4 DOM 元素的引用问题:如果在 JavaScript 中保留了对 DOM 元素的引用，即使这些 DOM 元素已经从页面中移除，由于引用的存在，这些 DOM 元素所占用的内存也无法被回收。

  3. 垃圾回收方式:标记清除和引用计数两种,但是引用计数存在循环引用的问题。

- [this 绑定问题](https://segmentfault.com/a/1190000040823905)

  1. this 绑定优先级：new 关键字 > 显式绑定 > 隐式绑定 > 默认绑定
  2. 间接函数引用：指的是通过变量、对象属性或数组元素等方式来引用函数，而不是直接使用函数名来调用函数。间接函数引用可能会改变 this 的指向，尤其是当函数从对象的方法赋值给变量或存储在数组中时，this 不再指向原对象。
  3. this 指向：
     3.1 普通函数调用：this 指向全局对象(严格模式下为 undefined)
     3.2 方法调用：this 指向调用方法的对象
     3.3 构造函数：this 指向实例
     3.4 call、apply、bind：指向第一个参数
     3.5 箭头函数：指向函数定义时的上下文，不随调用方法改变

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
      3.2 let 和 const：在同一作用域内，let 和 const 不允许重复声明同一个变量，否则会抛出 SyntaxError。

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

- 浏览器兼容如何处理

  1.  PC 和手机兼容：媒体查询和响应式设计方案
  2.  代码层面兼容：CSS 兼容（不同浏览器从工程化层面配置支持不同浏览器样式前缀、优雅降级方案）。JS 兼容（根据浏览器特性检测：即在代码运行时检查浏览器是否支持某个特性，进而采取不同处理方案）
  3.  通过垫片（Polyfill）和补丁（Shim）对现有代码进行修改，以修复特定浏览器的兼容性问题。

## 常见场景题

- 大文件上传

  实际场景: 音视频底座管理平台 插件包大文件上传, 根据不同端环境读取插件包资源相关配置
  [大文件上传示例](https://juejin.cn/post/6844904046436843527#heading-18)

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
  3.  流上传:大文件流上传使用 ReadableStream 读取文件内容方式，它会将文件数据以流的形式逐块读取和发送，而不是一次性将整个文件加载到内存中。这样，内存中只需要存储当前正在处理的小块数据，大大减少了内存的占用，从而避免了因内存不足而导致的卡顿。
  4.  三者区别:
      4.1 切片上传：更适合网络不稳定、文件非常大的场景，能够有效应对网络中断等问题，保证文件上传的完整性。例如，在云存储服务中，用户上传大型视频文件时，通常会采用切片上传的方式。
      4.2 断点续传：切片上传是实现断点续传的基础，断点续传通常依赖于切片上传的技术，因为只有将文件切片后，才能精确地记录上传进度并从断点处继续上传。例如，在手机端上传大型文件时，使用断点续传可以提高用户体验。
      4.3 流上传：适用于网络稳定、文件大小适中且对实时性要求较高的场景，例如实时音视频流的上传。

  注意场景:

      - 前端切片: 主进程做卡顿,webWorker 多线程切片,处理完交给主进程发送
      - 切完后将 blob 存储到 IndexedDB 中,下次用户进来之后,嗅探一下是否存在未完成上传的切片,有就继续上传
      - webscoket 实时通知 和请求序列控制 wss
      - 主导大文件上传的整体设计

- 大文件下载

  1. 核心思想: 核心思路是通过设置 HTTP 请求头的 Range 字段，指定每次请求下载的文件字节范围，将大文件分成多个小块进行下载，最后合并这些小块。
  2. 分块下载
  3. 断点续下
  4. HTTP Range 请求

- 如何移动端适配

  1. viewport 布局
  2. 媒体查询(Media Queries)
  3. 弹性布局（Flexbox 和 Grid）
  4. Rem 或者 vh/vw 布局
  5. 推荐:pxToRem 和弹性布局多种方式结合

     ```js
       <!DOCTYPE html>
       <html lang="en">

       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <style>
               /* 初始化样式 */
               html {
                   font-size: 16px;
               }

               .box {
                   width: 10rem;
                   height: 10rem;
                   background-color: #f0f0f0;
               }
           </style>
           <script>
               // 根据屏幕宽度动态设置根元素字体大小
               function setRootFontSize() {
                   const designWidth = 750; // 设计稿宽度
                   const clientWidth = document.documentElement.clientWidth;
                   const fontSize = (clientWidth / designWidth) * 100; // 以设计稿宽度为 750px，1rem 对应 100px 为例
                   document.documentElement.style.fontSize = fontSize + 'px';
               }

               // 页面加载时设置根元素字体大小
               window.addEventListener('load', setRootFontSize);
               // 窗口大小改变时重新设置根元素字体大小
               window.addEventListener('resize', setRootFontSize);
           </script>
       </head>

       <body>
           <div class="box"></div>
       </body>

       </html>
     ```

- 站点一键换肤

  1. CSS 类名切换: 优点：实现简单，易于维护，不需要重新加载页面，切换速度快。缺点：如果主题样式较多，CSS 文件会变得庞大，且每个主题的样式需要手动编写。
  2. CSS 变量: 在 CSS 中定义全局的 CSS 变量。优点：代码简洁，可维护性高，只需要修改变量的值就能实现主题切换。缺点：浏览器兼容性有一定要求
  3. 动态加载 CSS 文件: 准备不同主题的 CSS 文件：创建多个不同主题的 CSS 文件，例如 default.css 和 dark.css。
  4. SVG 图标换色: 如果站点中有 SVG 图标，也可以通过修改 SVG 的 fill 或 stroke 属性来实现图标颜色的切换，配合上述的换肤方式，使整个站点的换肤效果更加统一

- 前端错误监控平台如何搭建

  1.  错误数据类型收集
      1.1 JavaScript 运行时错误：利用 window.onerror 全局捕获 JavaScript 运行时错误。当错误发生时，此函数会接收到错误信息、错误发生的文件路径、行号、列号以及错误对象。
      1.2 Promise 未处理拒绝：借助 window.addEventListener('unhandledrejection') 捕获未处理的 Promise 拒绝。
      1.3 资源加载错误：通过 window.addEventListener('error') 监听资源加载错误，例如图片、脚本或样式表加载失败。
  2.  数据发送上报存储
  3.  可视化展示与分析：构建前端界面与数据可视化分析
  4.  邮件或者短信告警通知：邮件告警：当出现严重错误时，通过 Node.js 的 nodemailer 库发送邮件通知开发人员。短信告警：使用第三方短信服务提供商（如阿里云短信、腾讯云短信）实现短信告警功能。
  5.  性能优化与异常处理：数据采样：当错误数据量较大时，可以采用数据采样的方式减少数据传输和存储压力。异常处理：在错误收集和发送过程中，添加异常处理逻辑，确保系统的稳定性。
