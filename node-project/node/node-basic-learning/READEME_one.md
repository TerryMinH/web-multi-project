<!--
 * @Author: TerryMin
 * @Date: 2022-05-31 09:09:32
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-14 10:01:47
 * @Description: file not
-->

# Nodejs API

## path 模块

1. path: path 是 nodeJS 的一个内置模块，可以直接在其他 js 文件中导入该模块

```js
var path = require("path");
const p = path.resolve("./", "demo", "img");
console.log(p);
```

- \_\_dirname， 在所有情况下，该变量都表示当前运行的 js 文件所在的目录，它是一个绝对路径。
- 当我们使用 path.resolve()拼接路径时，会遇到需要使用绝对路径的情况，但是当我们把项目部署到服务器时，绝对路径会发生变化。因此，需要一个可以计算的绝对路径的表达方式。有了\_\_dirname，我们就可以解决以下问题
- [path 模块中 resolve()与 join 区别](https://www.jb51.net/article/149676.htm):
  join()只是拼接各个 path 片段，并不像 resolve()一样除了拼接各个字段还拼接了工作目录的路径，其次如果以/开头的字符串片段在 join 并不像 resolve 一样是只返回自身，还有就是.. 同 ../是一个意思都代表上一级目录

## fs 模块

1. (fs 基本使用)[https://blog.csdn.net/github_38140984/article/details/83006101]

2. readFile 与 createReadStream 函数区别

- readFile: 函数异步读取文件的全部内容，并存储在内存中，然后再传递给用户。
- createReadStream: 使用一个可读的流，逐块读取文件，而不是全部存储在内存中。
- 与 readFile 相比，createReadStream 使用更少的内存和更快的速度来优化文件读取操作。如果文件相当大，用户不必等待很长时间直到读取整个内容，因为读取时会先向用户发送小块内容。

## Nodejs 相关生态:

1. [基于 Http-service 快速搭建本地静态服务](https://blog.csdn.net/weixin_45932733/article/details/115861292)

2. Nodejs 调试

- [使用 ndb 调试 Nodejs 项目](https://juejin.cn/post/6844903651694100487)
