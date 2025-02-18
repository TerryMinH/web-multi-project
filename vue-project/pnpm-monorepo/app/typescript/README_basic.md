<!--
 * @Author: TerryMin
 * @Date: 2022-08-19 11:02:06
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-15 14:52:28
 * @Description: file not
-->

# Typescript

- [typescript 基础学习](https://juejin.cn/post/7124117404187099172#heading-58)
- [TS 基本概念总结](https://juejin.cn/post/7088304364078497800#heading-4)

## Ts 基础知识

1. [unknown 与 any 的最大区别](https://juejin.cn/post/7021676475434663966)

任何类型的值可以赋值给 any，同时 any 类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给 unknown 和 any

```js
function invokeAnything(callback: unknown) {
  // 可以将任何东西赋给 `unknown` 类型，
  // 但在进行类型检查或类型断言之前，不能对 `unknown` 进行操作
  if (typeof callback === "function") {
    callback();
  }
}
invokeAnything(1); // You can assign anything to `unknown` type

function invokeAny(callback: any) {
  callback();
}
invokeAny(1); // throws "TypeError: callback is not a function"
```

2. object Object 和 {} 类型
   [object 区别](https://cloud.tencent.com/developer/article/1610691)

object object 类型用于表示所有的非原始类型，原始类型: number、string、boolean、symbol、null 和 undefined。object 指的是 non-primitive，可以理解为“随便一个对象”;

大 Object 代表所有拥有 toString、hasOwnProperty 方法的 Object 实例类型。

{}指的是 non-nullish 没有成员的空对象，可以是 1、"abc"、symbol("")等原始数据，但是不能是 null 和 undefined

```js
// object
let obj1: object = { a: 1, b: 2 };
obj1.a = 3; // error
let obj2: { a: number, b: number } = { a: 1, b: 2 };
obj2.a = 3; // ok
let a: object;
a = "1"; // Error Type '"1"' is not assignable to type 'object'
a = {}; // ok

// Object
let b: Object;
b = "1"; // Success
b = {}; // Success

// {}
c = "1";
c.prop = 123; // Error
c = null; // Error
```

4. 交叉类型(&)、联合类型(|)、never 类型

- 交叉类型：交叉类型取的多个类型的 **并集**(必须同时满足 A 和 B 里面所有类型)，但是如果 key 相同但是类型不同，则该 key 为 never 类型
- [联合类型](https://juejin.cn/post/6930628304491773966):产生一个包含所有类型的**选择集类型**(至少满足其中一个 A 或者 B)

  - 原子类型不可以合并: 如果仅仅把基本类型、字面量类型、函数类型等原子类型合并成交叉类型，是没有任何用处的。因为任何类型都不能满足同时属于多种原子类型。
  - 合并的接口类型存在同名属性: 如果同名属性的类型兼容，比如一个是 number，另一个是 number 的子类型、数字字面量类型，合并后属性的类型就是两者中的子类型。

```js
interface A {
  name: string;
  age: number;
}
interface B {
  name: string;
  id: string;
}

type Union = A | B;
const c: Union = {
  name: "terrymin1",
  id: "rr",
  age: 22,
};
const b: Union = {
  name: "terrymin",
  age: 45,
};

type Intersetion = A & B;
const d: Intersetion = {
  id: "yuie",
  age: 32,
  name: "terrymin",
};
```

5. 接口 与 type(类型别名) 区别：(https://juejin.cn/post/6844904114925600776)

- type 会给一个类型起个新名字。 type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型
- interface 接口是对象的状态(属性)和行为(方法)的抽象(描述)

- 都允许扩展：interface 用 extends 来实现扩展;type 使用 & 实现扩展
- 不同点：type 可以声明基本数据类型别名/联合类型/元组等，而 interface 不行; interface 能够合并声明，而 type 不行
- 公共的用 interface 实现，不能用 interface 实现的再用 type 实现。

6. ts 操作符

- [ts 空值合并运算符(??)](https://cloud.tencent.com/developer/article/1600583)
- 空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数

```js
const foo = null ?? "default string";
console.log(foo); // 输出："default string"

const baz = 0 ?? 42;
console.log(baz); // 输出：0
```

- [非空断言操作符 !](https://blog.csdn.net/zxl1990_ok/article/details/125228518)

```js
 x! 将从 x 值域中排除 null 和 undefined
```

## [泛型使用](https://juejin.cn/post/7064351631072526350)

1. 泛型理解:

- 泛型:定义函数、方法、接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性
- 使用方式:泛型通过<>的形式进行表述，可以声明:函数、接口、类.
- 注意事项：泛型无法约束类的静态成员。

2. 指定泛型类型两种方式。

- 直接定义要使用的类型
- TS 类型推断,自动推导出类型

```ts
print<string>("hello"); // 定义 T 为 string
print("hello"); // TS 类型推断，自动推导类型为 string

// type书写方式
type Print = <T>(arg: T) => T;
const printFn: Print = function print(arg) {
  console.log(arg);
  return arg;
};

// interface书写方式
interface Iprint<T> {
  (arg: T): T;
}
function print<T>(arg: T) {
  console.log(arg);
  return arg;
}
const myPrint: Iprint<number> = print;
```

## [ts 高级类型](https://juejin.cn/post/6985296521495314445#heading-28)

- typeof : 获取变量或属性的类型,一般和其他类型操作符搭配使用

1. 总结:使用 typeof 操作符来获取变量 res 的类型，结果与第一种（对象字面量形式的类型）相同 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型） -[文档](https://ts.yayujs.com/)

```ts
{
  const res = { name: "Lucy", age: 18 };
  type StuType = typeof res; // {name: string; age: number;}
  function fn(obj: StuType) {
    // 这里写obj. 有 name 和 age 的提示了
    console.log(obj.name);
  }
  fn(res);
}

{
  const fn = (v: boolean): number => {
    if (v) return 1;
    else return 2;
  };
  type b = typeof fn; // (v: boolean) => number

  type a = ReturnType<typeof fn>; //  number
}

{
  // ReturnType<T> 会返回该函数的返回值的类型
  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>;
  /// type K = boolean
}
```

- keyof(索引类型查询操作符):获取对象中的所有键字面量**类型**组成的联合类型
  [keyof 使用示例](https://blog.csdn.net/lcl130/article/details/125214788)

```ts
type Person = {
  id: number;
  name: string;
  age: number;
};
type P1 = keyof Person; //'id' | 'name' | 'age'
```

- T[K](索引访问操作符)

```ts
interface Person {
  name: string;
  age: number;
  weight: number | string;
  gender: "man" | "women";
}

type NameType = Person["name"]; // string

type WeightType = Person["weight"]; // string | number

type GenderType = Person["gender"]; // "man" | "women"
```

- InstanceType<T>(实例类型)

```ts
class Person {
  name: string;
  age: number;
  weight: number;
  gender: "man" | "women";

  constructor(name: string, age: number, gender: "man" | "women") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

type Instance = InstanceType<typeof Person>; // Person

const params: Instance = {
  name: "Jack",
  age: 20,
  weight: 120,
  gender: "man",
};
```

- 函数返回值类型(ReturnType<T>)

```ts
type FunctionType = (name: string, age: number) => boolean | string;

type FunctionReturnType = ReturnType<FunctionType>; // boolean | string
```

- 类型守卫
  类型守卫主要有以下几种方式:
  typeof:用于判断 number，string，boolean 或 symbol 四种类型；
  instanceof:用于判断一个实例是否属于某个类,instanceof 的右侧要求是一个构造函数
  in:用于判断一个属性/方法是否属于某个对象

```ts
// typeof 示例
type Foo = string | number;
const controlFn = (foo: Foo) => {
  if (typeof foo === "string") {
    // foo 收窄为string类型
  } else if (typeof foo === "number") {
    // foo 收窄为number类型
  }
};
```

```ts
// instanceof 示例
class Bird {
  fly() {
    console.log("Bird flying");
  }
  layEggs() {
    console.log("Bird layEggs");
  }
}

class Fish {
  swim() {
    console.log("Fish swimming");
  }
  layEggs() {
    console.log("Fish layEggs");
  }
}

function start(pet: Bird | Fish) {
  // 调用 layEggs 没问题，因为 Bird 或者 Fish 都有 layEggs 方法
  pet.layEggs();

  if ((pet as Bird).fly) {
    (pet as Bird).fly();
  } else if ((pet as Fish).swim) {
    (pet as Fish).swim();
  }
}

// 使用instanceof后的代码
function start(pet: Bird | Fish) {
  // 调用 layEggs 没问题，因为 Bird 或者 Fish 都有 layEggs 方法
  pet.layEggs();

  if (pet instanceof Bird) {
    pet.fly();
  } else {
    pet.swim();
  }
}
```

3. as(类型断言) 用法: 类型断言两种表现形式: 1 "尖括号"语法, 2 as 语法。注意:两种形式是等价的;但是在 JSX 使用时,只有 as 语法断言是被允许的.

```ts
// 1 "尖括号"语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 2 as语法
let strAsLength: number = (someValue as string).length;
```

4. extends: K extends keyof T: 表示 K 是 T 的子类型，这里是一个类型约束声明。
   [Record 中 extends](https://blog.csdn.net/qq_36503569/article/details/119383782)
   [extends 关键字一般用法](https://juejin.cn/post/6998736350841143326)

```js
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});
```

5. in: in 用来遍历枚举类型:

```js
type Keys = "a" | "b" | "c"
type Obj =  {
  [p in Keys]: string
} // -> { a: string, b: string, c: string }
```

6. [条件类型](https://blog.csdn.net/lcl130/article/details/125244779)

```ts
 T extends U ? X : Y; 注释: T U X Y 四个是占位符，分别表示四种类型; T extends U 表示 T类型能被赋值给U类型，这里还涉及到TS类型兼容性。

```

7. infer 占位符式的关键字:表示在 extends 条件语句中以占位符出现的用来修饰数据类型的关键字，被修饰的数据类型等用到的时候才能被推断出来。作用：推导泛型参数

- 作用:获取参数、返回值、泛型的类型
- 出现位置:参数、返回值、类型的泛型具体化类型上
- 泛型与 infer 区别: 出现位置的不同:
  1 泛型出现在函数，接口，类中。
  2 infer 出现在 extends 后的表达式中
- [infer 使用](https://blog.csdn.net/lcl130/article/details/125352331)

```ts
// [infer 使用示例](https://juejin.cn/post/6844904170353328135)
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

type func = () => number;
type variable = string;
type funcReturnType = MyReturnType<func>; // funcReturnType 类型为 number
type varReturnType = MyReturnType<variable>; // varReturnType 类型为 string
```

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

// 3 Pick从某个类型中挑出一些属性出来
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

## Ts 常用示例

1. 枚举
   [Ts 枚举类型](https://juejin.cn/post/6998318291420708900)
   [Ts 常量枚举类](https://juejin.cn/post/6876624667533115400#heading-0)

2. ts 关键字
   [typeof 与 keyof 示例](https://juejin.cn/post/7096869746481561608)

3. [type-challenges](https://gitcode.net/mirrors/type-challenges/type-challenges/-/blob/master/README.zh-CN.md)
