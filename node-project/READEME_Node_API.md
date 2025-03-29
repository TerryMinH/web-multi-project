<!--
 * @Author: TerryMin
 * @Date: 2022-05-31 09:09:32
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-29 08:03:28
 * @Description: file not
-->

# [Nodejs](https://nodejs.cn/)

## Node 基本 API

- Node 全局变量

  1.  process(进程)
      1.1 process.cwd()：返回的是当前 Node.js 进程的工作目录。工作目录是指在命令行中启动 Node.js 脚本时所在的目录，它会随着进程的执行环境变化而改变。(current working directory)
  2.  \_\_dirname(模块级别全局对象)：它是一个在模块作用域内有效的全局变量，返回的是当前执行脚本所在的目录的绝对路径。
  3.  \_\_filename(模块级别全局对象)：获取当前文件所在的路径和文件名称，包括后面的文件名称

  ```js
  /**
   * 文件路径：D:\project\src\example.js
   假设你在 D:\project\src 目录下执行 node example.js，那么 process.cwd() 和 __dirname 都会返回 D:\project\src。但如果你在 D:\project 目录下执行 node src\example.js，process.cwd() 会返回 D:\project，而 __dirname 仍然返回 D:\project\src。
   **/
  console.log("process.cwd():", process.cwd());
  console.log("__dirname:", __dirname);
  ```

- path 模块

  1. path: path 是 nodeJS 的一个内置模块，可以直接在其他 js 文件中导入该模块

  ```js
  var path = require("path");
  const p = path.resolve("./", "demo", "img");
  console.log(p);
  ```

  2. path.join() 主要用于拼接路径，不会解析为绝对路径。
  3. path.resolve() 用于将路径解析为绝对路径，适合需要绝对路径的场景。

- fs 模块

  1. (fs 基本使用)[https://blog.csdn.net/github_38140984/article/details/83006101]
  2. readFile 与 createReadStream 函数区别
     2.1 readFile: 函数异步读取文件的全部内容，并存储在内存中，然后再传递给用户。
     2.2 createReadStream: 使用一个可读的流，逐块读取文件，而不是全部存储在内存中。
     2.3 与 readFile 相比，createReadStream 使用更少的内存和更快的速度来优化文件读取操作。如果文件相当大，用户不必等待很长时间直到读取整个内容，因为读取时会先向用户发送小块内容。

## Nodejs 相关生态:

1. [基于 Http-service 快速搭建本地静态服务](https://blog.csdn.net/weixin_45932733/article/details/115861292)

2. Nodejs 调试

- [使用 ndb 调试 Nodejs 项目](https://juejin.cn/post/6844903651694100487)
