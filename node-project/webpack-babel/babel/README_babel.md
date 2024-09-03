<!--
 * @Author: TerryMin
 * @Date: 2023-03-11 10:39:54
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-03 15:07:48
 * @Description: file not
-->

# Babel

1. [ES6 转 ES5 使用](https://segmentfault.com/a/1190000012918100)

- babel-loader:是通知 webpack 对 js 文件进行代码兼容性编译，会将 ES6 代码转成 ES5 代码，然后交给 webpack 打包。webpack 接下来就是要找 babel，而 bable 的入口就是 babel-core ，只有通过它，webpack 才能使用各种 babel 的 api（前提是你安装了相关的 api）

- babel-register 是 Babel 提供的一个模块，主要用于在运行时动态地将 ES6+ 等较新的 JavaScript 语法转换为旧版本的可执行 JavaScript 代码。

- babel-polyfill 是一个非常有用的工具，可以帮助开发者在旧环境中运行使用了现代 JavaScript 特性的代码，但在使用过程中需要注意其对文件体积、命名冲突和性能的影响，并正确地引入和配置，以确保项目的顺利运行和最佳性能。

2. [babel 运行原理](https://juejin.cn/post/6844903760603398151)

   - 解析 @babel-parse:将提供的代码作为一个完整的 ECMAScript 程序进行解析,返回 ast 节点。

   - 转换 @babel/traverse(遍历)方法维护这 AST 树的整体状态，并且可完成对其的替换，删除或者增加节点，这个方法的参数为原始 AST 和自定义的转换规则，返回结果为转换后的 AST。

   - @babel/generator 将修改后的 AST 转换成代码，生成过程可以对是否压缩以及是否删除注释等进行配置，并且支持 sourceMap

# Babel 配置(.babelrc)

[很棒的 Babel 手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md)

1. 通过运行 Babel 自己我们并没能“翻译”代码，而仅仅是把代码从一处拷贝到了另一处.可以通过安装**插件（plugins）或预设（presets，也就是一组插件）**来指示 Babel 去做什么事情。
