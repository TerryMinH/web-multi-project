<!--
 * @Author: TerryMin
 * @Date: 2022-08-19 11:02:06
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-24 16:20:56
 * @Description: file not
-->

# Ts 内置工具类型

- Ts 训练资源：

  - [ts 挑战博客](https://wangtunan.github.io/blog/typescript/challenge.html)
  - [web-interview](https://github.com/febobo/web-interview)
  - [冴羽博客文档](https://ts.yayujs.com/)
  - [Ts 枚举类型](https://juejin.cn/post/6998318291420708900)
  - [Ts 常量枚举类](https://juejin.cn/post/6876624667533115400#heading-0)
  - [typeof 与 keyof 示例](https://juejin.cn/post/7096869746481561608)

## [内置工具类型实现](https://juejin.cn/post/6896043465801793550)

```ts
// 1 Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉,剩余的属性构成新的类型
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

// 2 Extract 和 Exclude 相反，Extract<T,U> 从 T 中提取出 U。
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

type Person = {
  name: string;
  age: number;
  gender: string;
};

// 3 Pick从某个对象类型中挑出一些属性出来
type P1 = Pick<Person, "name" | "age">; // { name: string; age: number; }

// 4 Omit 与Pick相反，Omit<T,K> 从T中取出除去K的其他所有属性
type P2 = Omit<Person, "age" | "gender">; // {name:string}

// 5 Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。[高级类型 Record](https://zhuanlan.zhihu.com/p/356662885)
type Property = "key1" | "key2";
type Person = Record<Property, string>;
const p: Person = {
  key1: "hello 啊",
  key2: "树哥",
};

// 6 NonNullable 去除类型中的 null 和 undefined
type U = NonNullable<string | number | undefined>; // string | number

// 7 ReturnType 用来得到一个函数的返回值类型
type Func = (value: string) => string;
const test: ReturnType<Func> = "1";

// 8 Parameters 用于获得函数的参数类型所组成的元组类型。
type U1 = Parameters<(a: number, b: string) => void>; // [number, string]
```

- [Exclude 与 Omit 区别总结](https://www.fullstackbb.com/typescript/difference-between-omit-and-exclude-in-typescript)

  Exclude 是用在联合类型上的，而 Omit 是用在对象类型或者 interface 上的。Omit 的内部使用了 Exclude 来取 Keys.

  Extract 与 Pick 类似:都是提取指定的配置项
