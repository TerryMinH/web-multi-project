<!--
 * @Author: TerryMin
 * @Date: 2022-08-19 11:02:06
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-24 16:21:32
 * @Description: file not
-->

# [Typescript](https://www.typescriptlang.org/)

- Ts 资源
  - [TypeScript playground](https://www.typescriptlang.org/play)
  - [typescript 基础学习](https://juejin.cn/post/7124117404187099172)
  - [TS 基本概念总结](https://juejin.cn/post/7088304364078497800)

## Ts 基础知识

- [unknown 与 any 的最大区别](https://juejin.cn/post/7021676475434663966)

  - 任何类型的值可以赋值给 any，同时 any 类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给 unknown 和 any

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

- object Object 和 {} 类型
  [object 区别](https://cloud.tencent.com/developer/article/1610691)

  - object object 类型用于表示所有的非原始类型，原始类型: number、string、boolean、symbol、null 和 undefined。object 指的是 non-primitive，可以理解为“随便一个对象”;

  - 大 Object 代表所有拥有 toString、hasOwnProperty 方法的 Object 实例类型。

  - {}指的是 non-nullish 没有成员的空对象，可以是 1、"abc"、symbol("")等原始数据，但是不能是 null 和 undefined

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

- 交叉类型(&)、联合类型(|)、never 类型

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

- 接口 与 type(类型别名) 区别：(https://blog.csdn.net/ocean2103/article/details/142679234)

  - interface 和 type 都可以用来描述对象的形状，interface 更适合于定义对象结构，尤其是需要继承和合并时。type 更适合用于**简单的类型定义和复杂的类型组合**，如联合类型。但它们在某些特性上有所不同。
  - 继承和合并：interface 支持声明合并(即同名的接口会合并成一个，可以多次定义同一个接口。)和通过 extends 关键字实现继承，而 type 则不支持。
  - 类型表达能力：type 的类型表达能力更灵活，可以用于联合类型和交叉类型，通过交叉类型(&)可以实现多种类型的组合，而 interface 主要用于对象的结构定义。

  ```ts
  // interface声明合并
  interface Person {
    name: string;
  }
  interface Person {
    age: number;
  }
  const john: Person = { name: "John", age: 30 };
  ```

- ts 操作符

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

- abstract 抽象类

  - 定义通用结构和行为
  - 强制子类实现特定方法
  - 实现多态性
  - 代码复用和分层设计

- [泛型使用](https://juejin.cn/post/7064351631072526350)

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

- typeof(类型保护) :

  - 定义：用来获取一个 JavaScript 变量的类型，经常用于获取一个普通对象或者一个函数的类型。
  - 总结:使用 typeof 操作符来获取变量 res 的类型，结果与第一种（对象字面量形式的类型）相同 注意：typeof 只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）

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

- keyof(索引类型查询操作符):

  - 定义：获取对象中的所有**键字面量类型**组成的联合类型

  ```ts
  type Person = {
    id: number;
    name: string;
    age: number;
  };
  type P1 = keyof Person; //'id' | 'name' | 'age'
  ```

- extends:

  - extends 关键词，一般有两种用法：类型约束和条件类型

    - 类型约束：类型约束经常和泛型一起使用

      ```ts
      // 类型约束
        U extends keyof T: 表示 U 是 T 的子类型，这里是一个类型约束声明。
        T extends U: 表示 T必须至少包含U里面的类型，这里是一个类型约束声明。

        type KEY =  keyof any // 即 string | number | symbol, 不管什么类型，它的key总是string，number，symbol中的一种。

        // T extends Lengthwise 表示 T 必须至少包含 length: number;传入的对象可以有额外的属性，只要它满足 length 的要求;这种设计使得泛型更加灵活，同时保证类型安全。
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

    - 条件类型：条件类型是一种特殊的类型，它可以根据条件来返回不同的类型。
      ```ts
      // 条件类型
      T extends U? X : Y: 表示 T 是 U 的子类型，那么返回 X，否则返回 Y。这里是一个条件类型。
      ```

- infer

  - 定义：infer 关键词的作用是延时推导，它会在类型未推导时进行占位，等到真正推导成功后，它能准确的返回正确的类型。
  - 作用:获取参数、返回值、泛型的类型
  - 出现位置:参数、返回值、类型的泛型具体化类型上
  - 泛型与 infer 区别: 出现位置的不同:
    1 泛型出现在函数，接口，类中。
    2 infer 出现在 extends 后的表达式中
  - infer 使用资源：
    - [infer 关键字理解](https://juejin.cn/post/6844904170353328135)

- in: in 用来遍历枚举类型:

  ```js
  type Keys = "a" | "b" | "c"
  type Obj =  {
    [p in Keys]: string
  } // -> { a: string, b: string, c: string }
  ```

- 索引访问类型（Indexed Access Types）:T[K] 和 T[number]

  - T[K]（通用属性访问）

    - 定义：用于访问 对象类型 T 的某个属性 K 的类型；K 可以是 T 的任意键（string | number | symbol）
    - 注意：T[K] 只能用于访问对象类型中的键，不能用于访问数组类型中的元素。

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

  - T[number]（数组/元组元素访问）

    - 定义：用于数组或元组类型，获取元素类型或所有位置的联合类型。number 是固定的索引签名，表示“所有数字键对应的类型”。
    - 注意：Tuple[number] 会返回元组所有位置的类型的联合类型；仅适用于 数组或元组类型，普通对象类型用 T[number] 会报错

    ```ts
    type Tuple = [string, number, boolean];
    type First = Tuple[0]; // string
    type Second = Tuple[1]; // number
    type AllElements = Tuple[number]; // string | number | boolean
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

  - 类型守卫主要有以下几种方式:

    - typeof:用于判断 number，string，boolean 或 symbol 四种类型；
    - instanceof:用于判断一个实例是否属于某个类,instanceof 的右侧要求是一个构造函数
    - in:用于判断一个属性/方法是否属于某个对象
    - is:类型谓词

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

- as(类型断言) 用法: 类型断言两种表现形式:

  - "尖括号"语法,
  - as 语法。
  - 注意:两种形式是等价的;但是在 JSX 使用时,只有 as 语法断言是被允许的.

  ```ts
  // 1 "尖括号"语法
  let someValue: any = "this is a string";
  let strLength: number = (<string>someValue).length;
  // 2 as语法
  let strAsLength: number = (someValue as string).length;
  ```
