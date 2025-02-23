<!--
 * @Author: TerryMin
 * @Date: 2022-12-26 13:58:25
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-23 09:07:22
 * @Description: ts文件动态编译: tsc index.ts --watch
-->

# typescript 编译原理

1. [ts 配置详解](https://juejin.cn/post/6844904093568221191)

- tsconfig.json 作为其配置文件，它主要包含两块内容:

  - 1 定义编译选项:(https://juejin.cn/post/6924264635218542605)
    - 1.1 files:files 属性是一个数组，数组元素可以是相对文件路径和绝对文件路径。
    - 1.2 include、exclude: include 和 exclude 属性也是一个数组，但数组元素是类似 glob 的文件模式。它支持的 glob 通配符。
    - 1.3 注意事项:exclude 只对 include 有效，对 files 无效。即 files 指定的文件如果同时被 exclude 排除，那么该文件仍然会被编译器引入。
  - 2 指定待编译的文件: compilerOptions

- [ts 编译原理](https://juejin.cn/post/7009661133686734861)

[web-interview](https://github.com/febobo/web-interview)

# 模块、命名空间

1. 命名空间(内部模块):本质上是一个对象，作用是将一系列相关的全局变量组织到一个对象的属性。用 namespace 来定义;主要用于组织代码，避免命名冲突

```ts
namespace Letter {
  export let a = 1;
  export let b = 2;
  export let c = 3;
  // ...
  export let z = 26;
}
// 编译成js
var Letter;
(function (Letter) {
  Letter.a = 1;
  Letter.b = 2;
  Letter.c = 3;
  // ...
  Letter.z = 26;
})(Letter || (Letter = {}));
```

- 在声明文件(typing.d.ts)中声明，这样就不需要 import 就可以使用该命名空间

```ts
// typing.d.ts声明 命名空间 这个空间的命名，我以鞋柜举例
declare namespace SHOEBOX {
  // 进行该空间下的方法、类型、接口、实体类等等定义
  type Shoe = {
    size: number;
    name: string;
  };
}
//other.ts 其他的ts文件中
const shoe: SHOEBOX.Shoe = {
  size: 1,
  name: "帆布鞋",
};
```

2. 模块(外部模块): ts 的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

- 模块在其自身的作用域里执行，而不是在全局作用域里;这意味着定义一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用 export 形式之一导出他们。(https://blog.csdn.net/qq_37708564/article/details/106256723)

3. 命名空间与模块的区别:在正常的 TS 项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用

4. declare

- declare:声明全局变量、全局函数、全局类或全局枚举类型等。工作中你可能已经用过的 eval、isNaN、encodeURI 和 parseInt 等函数也是在 lib.es5.d.ts 声明文件中声明的.[declare 用法](https://juejin.cn/post/7105644010668032030)

[.d.ts 描述文件的使用](https://blog.csdn.net/zy21131437/article/details/121946978)
