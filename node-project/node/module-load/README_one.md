<!--
 * @Author: TerryMin
 * @Date: 2022-06-20 15:34:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-14 10:02:35
 * @Description: file not
-->

# 模块化（ESM 与 CJS）

## 不同模块化基本使用 与相互转换使用

1. Nodejs 模块化 [exports 与 module.exports](https://www.jianshu.com/p/da295cf76eea)

- module.exports 写起来比较复杂，Node 提供了 exports 对象，默认情况下，exports 和 module.exports 指向同一个对象，但最终暴露的结果，还是以 module.exports 指向的对象为准(在同一个模块中同时使用 exports 和 module.exports)
- exports 相当于 module.exports 的快捷方式:const exports = module.exports;
- module.exports 一个文件可以用 module.exports 导出多个属性,但是 module.exports={}会覆盖文件中其他属性的导出

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

## 不同模块化之间区别 [CJS 与 ESM 混用](https://www.php.cn//js-tutorial-489540.html)

1.  ESM 引用 CJS 模块的问题: ESM 基本可以顺利地 import CJS 模块，但对于具名的 exports（Named exports，即被整体赋值的 module.exports），只能以 default export 的形式引入

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

2.  CJS 引用 ESM 模块的问题: 假设你在开发一个供别人使用的开源项目，且使用 ESM 的形式导出模块，那么问题来了 —— 目前 CJS 的 require 函数无法直接引入 ESM 包，会报错

- 在 Node 中使用 ESM: Node 默认只支持 CJS 语法，针对 ESM 语法的 js 文件，将无法被执行。如果想在 Node 中使用 ESM 语法，有两种可行方式:(https://juejin.cn/post/7048276970768957477)
  - 2.1 在 package.json 中新增 "type": "module" 配置项:Node 会将和 package.json 文件同路径下的模块，全部当作 ESM 来解析
  - 2.2 将 ESM 的文件改为.mjs 后缀:Node 会自动地把全部 xxx.mjs 文件都作为 ESM 来解析

3.  CJS 与 ESM 不同点:(https://segmentfault.com/a/1190000043720379)

- 加载方式：CommonJS 使用同步加载方式，即遇到 require 就执行代码，并等待结果返回后再继续执行；而 ESM 使用异步加载方式，它是通过 Promise 的方式异步加载模块，遇到 import 不会阻止程序继续执行。
- CJS 输出是值的浅拷贝；ESM 输出的是值的引用，被输出模块的内部的改变会影响引用的改变。
- CJS 中模块的执行需要用函数包起来，并指定一些常用的值,所以可以在 CJS 模块里直接用 **filename、**dirname。而 ESM 的标准中不包含这方面的实现,既无法使用这些变量。
- CJS this 指向当前模块，ESM this 指向 undefined

## 不同模块化加载机制

1. Nodejs 模块化加载机制

- Node.js 模块分类:
  - 核心模块(http、fs、path) 。
  - 路径形式的文件模块(以. 、..和/开始的标识符，这里都被当做文件模块来处理)
  - 自定义模块(在 node_modules 文件夹中)
- Node.js 中模块加载一般会经历 3 个步骤，路径分析、文件定位、编译执行

- 按照模块的分类，按照以下顺序进行优先加载：
  - 系统缓存：模块被执行之后会会进行缓存，首先是先进行缓存加载，判断缓存中是否有值。
  - 核心模块：也就是原生模块，这个优先级仅次于缓存加载，部分核心模块已经被编译成二进制，省略了 路径分析、文件定位，直接加载到了内存中，系统模块定义在 Node.js 源码的 lib 目录下，可以去查看。
  - 路径形式的文件模块：优先加载 .、..、/ 开头的，如果文件没有加上扩展名，会依次按照 .js、.json、.node 进行扩展名补足尝试，那么在尝试的过程中也是以同步阻塞模式来判断文件是否存在，从性能优化的角度来看待，.json、.node 最好还是加上文件的扩展名。
  - 目录做为模块：这种情况发生在文件模块加载过程中，也没有找到，但是发现是一个目录的情况，这个时候会将这个目录当作一个 包 来处理，Node 这块采用了 Commonjs 规范，先会在项目根目录查找 package.json 文件，取出文件中定义的 main 属性 ("main": "lib/hello.js") 描述的入口文件进行加载，也没加载到，则会抛出默认错误: Error: Cannot find module 'lib/hello.js'
  - 自定义模块：node_modules 目录加载：对于系统模块、路径文件模块都找不到，Node.js 会从当前模块的父目录进行查找，直到系统的根目录

2. [ES6 模块化加载机制](https://blog.csdn.net/zl_best/article/details/77962686)

- 默认情况下，浏览器同步加载 JavaScript 脚本，即渲染引擎遇到 < script>标签就会停下来，等到脚本执行完毕再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。(如果脚本体积很大就会“卡死”)
- < script>标签打开 defer 或 async 属性，脚本就会异步加载。defer 是“渲染完再执行”，async 是“下载完就执行”
- 浏览器加载 ES6 模块时也使用< script>标签，但是要加入 type=”module”属性。对于带有 type=”module”的< script>，浏览器都是异步加载的，不会造成浏览器堵塞，即等到整个页面渲染完再执行模块脚本，等同于打开了< script>标签的 defer 属性。

3. [不同模块演进关系](https://blog.csdn.net/cookcyq__/article/details/131497598)

## NPM

[npm 包发布](https://www.kancloud.cn/outsider/clitool/313178)
[npm 包管理机制](https://zhuanlan.zhihu.com/p/97737201)

- 以 @ 开头的文件或文件夹在 Node.js 项目中通常用于表示命名空间或组织范围的模块，有助于组织、区分和管理不同的模块和项目变体。

```js
例如，一个使用 TypeScript 的项目可能会安装 @types 命名空间下的类型定义文件，这些文件用于提供 TypeScript 对特定模块的类型信息。
```
