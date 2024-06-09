<!--
 * @Author: TerryMin
 * @Date: 2023-03-11 10:39:54
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-07-03 15:00:13
 * @Description: file not
-->

# Babel

1. [babel 运行原理](https://juejin.cn/post/6844903760603398151)
   1.1 解析 @babel-parse:将提供的代码作为一个完整的 ECMAScript 程序进行解析,返回 ast 节点。

   1.2 转换 @babel/traverse(遍历)方法维护这 AST 树的整体状态，并且可完成对其的替换，删除或者增加节点，这个方法的参数为原始 AST 和自定义的转换规则，返回结果为转换后的 AST。

   1.3 @babel/generator 将修改后的 AST 转换成代码，生成过程可以对是否压缩以及是否删除注释等进行配置，并且支持 sourceMap

2. ES6 转 ES5:Babel-loader
   [Babel-loader 及相关配置简单示例](https://www.jiangruitao.com/webpack/babel-loader/)

# Babel 配置(.babelrc)

[很棒的 Babel 手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md)

1. 通过运行 Babel 自己我们并没能“翻译”代码，而仅仅是把代码从一处拷贝到了另一处.可以通过安装**插件（plugins）或预设（presets，也就是一组插件）**来指示 Babel 去做什么事情。
