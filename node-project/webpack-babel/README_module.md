<!--
 * @Author: TerryMin
 * @Date: 2022-06-20 15:34:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 14:20:13
 * @Description: file not
-->

# 模块化

## 模块化规范:

- 浏览器模块化: JavaScript 模块化规范，它们旨在解决在浏览器环境中模块的定义、加载和依赖管理问题

  1. AMD（Asynchronous Module Definition）: 代表(以 RequireJS 为例)
     特点：在模块定义时就会立即加载所有依赖的模块，即使这些模块在模块内部可能并不会马上被使用。这种方式适合在模块加载完成后就立即执行的场景。
     示例：当页面加载时，AMD 会并行加载所有依赖的模块，然后再执行模块的定义函数。

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <title>AMD Example</title>
         <!-- 引入 RequireJS -->
         <script data-main="main" src="require.js"></script>
       </head>
       <body></body>
       <script>
         // math.js 定义模块：使用 define 函数定义模块。
         define(["add", "subtract"], function (add, subtract) {
           return {
             add: add,
             subtract: subtract,
           };
         });

         // main.js 使用模块：在 main.js 中使用 require 函数加载和使用模块。
         require(["math"], function (math) {
           console.log(math.add(2, 3));
           console.log(math.subtract(5, 2));
         });
       </script>
     </html>
     ```

  2. CMD（Common Module Definition）: （以 Sea.js 为例）
     特点：只有在模块内部真正需要使用某个依赖时才会去加载该模块。这种方式可以避免不必要的模块加载，提高性能，尤其是在大型项目中，有些模块可能在某些情况下并不会被使用。
     示例：在 math 模块中，只有当执行到 require('add') 和 require('subtract') 时，才会去加载 add 和 subtract 模块。

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <title>CMD Example</title>
         <!-- 引入 Sea.js -->
         <script src="sea.js"></script>
         <script>
           // 配置 Sea.js
           seajs.config({
             base: "./",
             alias: {
               math: "math.js",
             },
           });
           // 加载模块
           seajs.use("math", function (math) {
             console.log(math.add(2, 3));
             console.log(math.subtract(5, 2));
           });

           // math.js 使用 define 函数定义模块。
           define(function (require, exports, module) {
             var add = require("add");
             var subtract = require("subtract");

             exports.add = add;
             exports.subtract = subtract;
           });
         </script>
       </head>
       <body></body>
     </html>
     ```

  3. ESM（ES Module）:

- Node 模块化:

  1. CJS（CommonJS）:CJS 在 Node 中已内置，开箱即用，无须引入插件
  2. Nodejs 环境启用支持 ESM 模块
     2.1 Nodejs 从 v13.2.0 版本就开始支持 ESM ，前提条件是，文件名后缀必须为 .mjs ;
     2.2 若想省略 .mjs ，可在 package.json 设置 type: "module" 即可;
     2.3 在 Node.js 环境中使用 ESM ，导入模块时必须使用完整的相对路径，包括文件扩展名。例如，不能写成 import { add } from './math'，而要写成 import { add } from './math.mjs'。
  3. [Nodejs 环境中使用 CJS](<(https://juejin.cn/post/7048276970768957477)>):
     3.1 文件以.cjs 为后缀
     3.2 package.json 里定义了"type": "commonjs"

- UMD（Universal Module Definition）:是一种通用的 JavaScript 模块化规范，结合了 AMD + CommonJS 的结合体，同时还兼容了 script 标签引入，旨在使模块能够在多种环境下使用，包括浏览器环境和 Node.js 环境，甚至在没有模块加载器的全局环境中，都能正常运行。

  1. 实现原理:UMD 模块的核心思想是通过检测当前环境中可用的模块加载机制，然后根据不同的环境采用不同的方式来定义模块。通常，UMD 模块会先检查是否存在 AMD 的 define 函数，如果存在则使用 AMD 方式定义模块；接着检查是否存在 CommonJS 的 exports 对象，如果存在则使用 CommonJS 方式定义模块；如果都不存在，则将模块挂载到全局对象（如浏览器中的 window 对象）上。

  2. UMD 模块示例:

     ```js
     (function (root, factory) {
       if (typeof define === "function" && define.amd) {
         // AMD 环境
         define([], factory);
       } else if (typeof exports === "object") {
         // CommonJS 环境
         module.exports = factory();
       } else {
         // 全局环境
         root.myModule = factory();
       }
     })(this, function () {
       // 模块的具体实现
       var myFunction = function () {
         return "Hello, UMD!";
       };

       return {
         myFunction: myFunction,
       };
     });
     ```

- CommonJS 与 ESM 规范的区别：

  1.  CommonJS 是同步加载，ESM 是异步加载；(由于 CommonJS 是用于服务器端的模块体系，需要加载的模块都在本地，所以采用同步加载也不会出问题，但是 ESM 用于浏览器端时，可能涉及到一些异步请求，所以需要采用异步加载。)
  2.  CommonJS 模块是运行时加载，ES6 Modules 是编译时输出接口。
  3.  ES6 Modules 中没有这些顶层变量：arguments、require、module、exports、filename、dirname。
  4.  CommonJS 输出是值的浅拷贝；ES6 Modules 输出的是值的引用，被输出模块的内部的改变会影响引用的改变。
  5.  CommonJs 导入的模块路径可以是一个表达式，因为它使用的是 require()方法；而 ES6 Modules 只能是字符串。
  6.  CommonJS this 指向当前模块，ES6 Modulesthis 指向 undefined。

- CJS 模块化 [exports 与 module.exports](https://www.jianshu.com/p/da295cf76eea)

  1.  module.exports 写起来比较复杂，Node 提供了 exports 对象，默认情况下，exports 和 module.exports 指向同一个对象，但最终暴露的结果，还是以 module.exports 指向的对象为准(在同一个模块中同时使用 exports 和 module.exports)
  2.  exports 相当于 module.exports 的快捷方式:const exports = module.exports;
  3.  module.exports 一个文件可以用 module.exports 导出多个属性,但是 module.exports={}会覆盖文件中其他属性的导出

  ```js
  // lib.js
  exports.test = "a";
  module.exports.Say = function () {
    console.log("我可以干任何事情");
  };
  // module.exports对象会覆盖上面所有导出
  //  module.exports = {
  //   a: 1,
  //   b: 2,
  // };

  // main.js
  const result = require("./lib.js");
  console.log(result); // {Say: [Function (anonymous)], test: 'a' }
  ```

- [CJS 与 ESM 混用](https://www.php.cn//js-tutorial-489540.html)

  1. ESM 引用 CJS 模块的问题: ESM 基本可以顺利地 import CJS 模块，但对于具名的 exports（Named exports，即被整体赋值的 module.exports），只能以 default export 的形式引入

     ```js
     /** @file cjs/a.js **/
     // named exports
     module.exports = {
       foo: () => {
         console.log("It's a foo function...");
       },
     };

     /** @file index_err.js **/
     import { foo } from "./cjs/a.js";
     // SyntaxError: Named export 'foo' not found. The requested module './cjs/a.js' is a CommonJS module, which may not support all module.exports as named exports.
     foo();

     /** @file index_err.js **/
     import pkg from "./cjs/a.js"; // 以 default export 的形式引入
     pkg.foo(); // 正常执行
     ```

- 不同模块化加载机制

  1.  Nodejs 模块化加载机制
      1.1 Node.js 模块分类:

          - 核心模块(http、fs、path) 。
          - 路径形式的文件模块(以. 、..和/开始的标识符，这里都被当做文件模块来处理)
          - 自定义模块(在 node_modules 文件夹中)

      1.2 Node.js 中模块加载一般会经历 3 个步骤，路径分析、文件定位、编译执行

          1.2.1 按照模块的分类，按照以下顺序进行优先加载：
            - 系统缓存：模块被执行之后会会进行缓存，首先是先进行缓存加载，判断缓存中是否有值。
            - 核心模块：也就是原生模块，这个优先级仅次于缓存加载，部分核心模块已经被编译成二进制，省略了 路径分析、文件定位，直接加载到了内存中，系统模块定义在 Node.js 源码的 lib 目录下，可以去查看。
            - 路径形式的文件模块：优先加载 .、..、/ 开头的，如果文件没有加上扩展名，会依次按照 .js、.json、.node 进行扩展名补足尝试，那么在尝试的过程中也是以同步阻塞模式来判断文件是否存在，从性能优化的角度来看待，.json、.node 最好还是加上文件的扩展名。
            - 目录做为模块：这种情况发生在文件模块加载过程中，也没有找到，但是发现是一个目录的情况，这个时候会将这个目录当作一个 包 来处理，Node 这块采用了 Commonjs 规范，先会在项目根目录查找 package.json 文件，取出文件中定义的 main 属性 ("main": "lib/hello.js") 描述的入口文件进行加载，也没加载到，则会抛出默认错误: Error: Cannot find module 'lib/hello.js'
            - 自定义模块：node_modules 目录加载：对于系统模块、路径文件模块都找不到，Node.js 会从当前模块的父目录进行查找，直到系统的根目录

  2.  [ES6 模块化加载机制](https://blog.csdn.net/zl_best/article/details/77962686)

      - 默认情况下，浏览器同步加载 JavaScript 脚本，即渲染引擎遇到 < script>标签就会停下来，等到脚本执行完毕再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。(如果脚本体积很大就会“卡死”)
      - < script>标签打开 defer 或 async 属性，脚本就会异步加载。defer 是“渲染完再执行”，async 是“下载完就执行”
      - 浏览器加载 ES6 模块时也使用< script>标签，但是要加入 type=”module”属性。对于带有 type=”module”的< script>，浏览器都是异步加载的，不会造成浏览器堵塞，即等到整个页面渲染完再执行模块脚本，等同于打开了< script>标签的 defer 属性。
