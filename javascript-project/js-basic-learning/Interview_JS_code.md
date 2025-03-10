<!--
 * @Author: TerryMin
 * @Date: 2024-08-05 10:17:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-09 10:18:15
 * @Description: file not
-->

## 手写 new 实现原理

- 创建一个新对象；
- 链接到原型（将新对象的原型(**proto**)指向构造函数的原型对象(prototype)）；
- 绑定 this（构造函数中的 this 指向新对象并且调用构造函数）
- 返回新对象

- 第一种实现：(https://blog.csdn.net/q1424966670/article/details/92839918)

```js
function realizeNew() {
  //创建一个新对象
  let obj = {};
  //获得构造函数
  let Con = [].shift.call(arguments);
  //链接到原型（给obj这个新生对象的原型指向它的构造函数的原型）
  obj.__proto__ = Con.prototype;
  //绑定this
  let result = Con.apply(obj, arguments);
  //确保new出来的是一个对象
  return typeof result === "object" ? result : obj;
}

//通过new创建构造实例
let person1 = new Person("Curry", 18);
console.log(person1.name); //"Curry"
console.log(person1.age); //18
person1.say(); //"I am Curry'

//通过realize()方法创造实例
let person2 = realizeNew(Person, "Curry", 18);
console.log(person2.name); //"Curry"
console.log(person2.age); //18
person2.say(); //"I am Curry'
```

- 第二种实现：
  let obj = Object.create(fn.prototype) 等价于：
  let obj = new Object();
  obj._proto_ = constructor.prototype;即:

```js
function realizeNew() {
  //获得构造函数
  let Con = [].shift.call(arguments);
  //创建一个新对象
  let obj = Object.create(Con.prototype);
  //绑定this
  let result = Con.apply(obj, arguments);
  //确保new出来的是一个对象
  return typeof result === "object" ? result : obj;
}
```

## [手写 JS call() apply() bind() 原理实现](https://segmentfault.com/a/1190000015724112?utm_source=sf-related)

1. call、apply 和 bind 都是 JavaScript 中 Function 对象的方法，它们的主要作用是改变函数内部 this 的指向，不过在使用方式和返回结果上存在一些区别:

   1.1 参数传递方式区别:

   - apply: apply 方法同样接受两个参数，第一个参数是要绑定的 this 值，第二个参数是一个数组，数组中的元素会作为参数传递给函数
   - call: call 方法接受多个参数，第一个参数是要绑定的 this 值，后续的参数是传递给函数的参数，参数之间用逗号分隔。
   - bind: bind 方法的参数传递方式与 call 类似，第一个参数是要绑定的 this 值，后续参数是传递给函数的参数，参数之间用逗号分隔。

     1.2 立即执行 vs 延迟执行:

   - call 和 apply:这两个方法会立即调用函数，并将 this 值绑定到指定的对象上。
   - bind:bind 方法不会立即调用函数，而是返回一个新的函数，新函数的 this 值已经被绑定到指定的对象上

- apply 实现:

```js
Function.prototype.newApply = function (context, parameter) {
  if (typeof context === "object") {
    context = context || window;
  } else {
    context = Object.create(null);
  }
  let fn = Symbol(); // 保证对象属性的唯一性；
  context[fn] = this; // 通过this获取call的函数(this指向调用者对象)
  console.log(context);
  context[fn](...parameter);
  delete context[fn]; // 目的是保证使用完之后删除对应的属性；
};
let person = {
  name: "Abiel",
};
function sayHi(age, sex) {
  console.log(this.name, age, sex);
}
sayHi.newApply(person, [25, "男"]);
```

- bind 实现:

```js
Function.prototype.myBind = function (Fn, argument) {
  let that = this;
  return function (parameters) {
    that.call(Fn, argument, parameters);
  };
};

let obj = {
  name: "TerryMin",
};

function sayHi(age, sex) {
  console.log(this.name, age, sex);
}
let func = sayHi.myBind(obj, 24);
func("boy");
```

## 函数防抖与节流

1. 函数防抖(debounce)：指事件在触发 n 秒后再执行回调,如果在这个时间间隔内多次点击，会重新计时,只有最后一次有效。 应用场景：

- 手机号、邮箱输入检测
- 搜索框搜索输入（只需最后一次输入完后，再发送 Ajax 请求）
- 窗口大小`resize`（只需窗口调整完成后，计算窗口大小，防止重复渲染）
- 滚动事件`scroll`（只需执行触发的最后一次滚动事件的处理程序）
- 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，（停止输入后）验证一次就好
- 适用场景：当按钮点击触发的操作比较耗时，或者频繁触发会带来严重后果（如重复提交表单、重复发起支付请求）时，适合使用防抖。在双十一的场景中，像提交订单、支付按钮等操作，使用防抖可以避免用户因为误操作或快速多次点击而产生多个相同的请求，保证业务的准确性和稳定性

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>函数防抖模式</title>
</head>
<body>
  函数防抖： <input type="text" id="inputId">
</body>
<script>
  let elem = document.getElementById("inputId");
  // 不防抖函数
  elem.addEventListener('keyup', function (e) {
    console.log(e.target.value);
  })

  // 防抖函数
  function debounce(fn, delay) {
    let timer;
    return function () {
      // this赋值：函数运行时会改变内部this的指向问题. 下面可以利用箭头函数而不用this赋值。
      let context = this, args = arguments;
      if (timer) { clearTimeout(timer); }
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay)
    }
  }

  function testDebounce(e, content) {
    console.log(e.target.value, content);
  }
  let DebounceFn = debounce(testDebounce, 1000);

  elem.addEventListener('keyup', function (e) {
    DebounceFn(e, 'debounce');
  })
</script>
</html>
```

2. 函数节流(throttle)：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。 应用场景：

- `DOM`元素的拖拽功能实现（`mousemove`）
- 射击游戏的  `mousedown`/`keydown`  事件（单位时间只能发射一颗子弹）
- 计算鼠标移动的距离（`mousemove`）
- 搜索联想（`keyup`）
- 滚动事件`scroll`，（只要页面滚动就会间隔一段时间判断一次）

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>函数节流模式</title>
</head>
<body>
</body>
<script>
  // 非节流函数
  document.onmousemove = function (e) {
    console.log(e);
  }

  // 节流函数
  function throttle(fn, delay) {
    let timer;
    return function () {
      let context = this, args = arguments;
      if (timer) { return; }
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  }
  function testThrottle(e, content) {
    console.log(e, content);
  }

  let testThrottleFn = throttle(testThrottle, 1000); // 节流函数

  document.onmousemove = function (e) {
    testThrottleFn(e, 'throttle');
  }
</script>
</html>
```

3. 防抖与函数节流区别：函数防抖是某一段时间只执行一次，而函数节流是间隔时间执行。

## 深拷贝与浅拷贝

- 浅拷贝(浅克隆)：直接将存储在栈中的值赋值给对应变量，如果是基本数据类型，则直接赋值对应的值，如果是引用类型，则赋值的是地址。
- 深拷贝(深克隆)：就是把数据赋值给对应的变量，从而产生一个与源数据不相关的新数据(数据地址已变化)。深拷贝，是拷贝对象各个层级的属性。
- 深拷贝与浅拷贝区别：引用类型保存的是内存地址，浅拷贝操作的其实是共同的内存，所以深拷贝主要就是判断对象属性的变量类型，然后进行层层复制基本数据类型。

1. 浅拷贝的方式：
   方式 1：数据直接赋值；
   方式 2：展开运算符（...）；
   方式 3：Object.assign()方法只能深拷贝对象第一层数据：

```jsx
let target = { a: 1, b: 2 };
let source = { b: 4, c: 5, child: { name: "liming" } };

const returnedTarget = Object.assign(target, source);
source.c = 6;
source.child.name = "zhangsan";
console.log(returnedTarget, source);
```

2. 深拷贝的方式：

- 方法 1：JSON.stringify 和 JSON.parse

```jsx
function deepClone(obj) {
  let _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
  return objClone;
}

let obj1 = {
  name: "李明",
  arrayList: [1, 2, [3, 4], 5],
  child: {
    name: "张三",
    years: 4,
  },
};
let obj2 = deepClone(obj1);

obj1.child.name = "小王";
obj1.arrayList[2][0] = 10;

console.log(obj1, obj2);
```

- 方法 2：通过递归方式自定义：

```jsx
function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

let obj1 = {
  name: "李明",
  arrayList: [1, 2, [3, 4], 5],
  child: {
    name: "张三",
    years: 4,
  },
};
let obj2 = deepClone(obj1);

obj1.child.name = "小王";
obj1.arrayList[2][0] = 10;

console.log(obj1, obj2);
```

- 总结：
  JSON.parse(JSON.stringify(Obj))原理是通过将对象转化为字符串基本数据类型在进行赋值操作。该实现虽然简单但也有其弊端，具体可参考：[JSON.stringify 弊端](https://blog.csdn.net/u013565133/article/details/102819929?utm_medium=distribute.pc_relevant.none-task-blog-title-1&spm=1001.2101.3001.4242)

3.  JS 深拷贝 vs 浅拷贝之堆栈池：[js 数据类型在堆栈中的区别](https://juejin.cn/post/6844903493925371917)
    **1 、栈（stack）和堆（heap）：**
    堆和栈其实是两种数据结构。堆栈都是一种数据项按序排列的数据结构，只能在一端(称为栈顶(top))对数据项进行插入和删除。堆栈是个特殊的存储区，主要功能是暂时存放数据和地址
    栈（Stack 操作系统）：由操作系统自动分配释放 ，存放函数的参数值和局部变量的值等。其操作方式类似于数据结构中的栈。简单的理解就是当定义一个变量的时候，计算机会在内存中开辟一块存储空间来存放这个变量的值，这块空间就叫做栈，然而**栈中一般存放的是基本类型数据**，**栈的特点是先进后出（或后进先出）**
    堆（Heap 操作系统）： 一般由程序员分配释放， 若程序员不释放，程序结束时可能由 OS 回收，分配方式倒是类似于链表。其实**在堆中一般存放变量是一些对象类型**
    **2、基本类型和引用类型**
    **基本类型：**存放在栈内存中的简单数据段，数据大小确定，内存空间大小可以分配。
    基本数据类型有**Undefined、Null、Boolean、Number**  和  **String、BigInt、Symbol**，它们是直接按值存放的，所以可以直接访问。
    **引用类型：**存放在堆内存中的对象，变量实际保存的是一个指针，这个指针指向另一个位置。每个空间大小不一样，要根据情况开进行特定的分配。
    当我们需要访问引用类型（如**对象，数组，函数**等）的值时，首先从栈中获得该对象的地址指针，然后再从堆内存中取得所需的数据。

## 手写 Promise 实现原理,

1. [Promise class 实现原理](https://www.jianshu.com/p/43de678e918a)

   ```js
   // 判断变量否为function
   const isFunction = (variable) => typeof variable === "function";
   // 定义Promise的三种状态常量
   const PENDING = "PENDING";
   const FULFILLED = "FULFILLED";
   const REJECTED = "REJECTED";

   class MyPromise {
     constructor(handle) {
       if (!isFunction(handle)) {
         throw new Error("MyPromise must accept a function as a parameter");
       }
       // 添加状态
       this._status = PENDING;
       // 添加状态
       this._value = undefined;
       // 添加成功回调函数队列
       this._fulfilledQueues = [];
       // 添加失败回调函数队列
       this._rejectedQueues = [];
       // 执行handle
       try {
         handle(this._resolve.bind(this), this._reject.bind(this));
       } catch (err) {
         this._reject(err);
       }
     }
     // 添加resovle时执行的函数
     _resolve(val) {
       const run = () => {
         if (this._status !== PENDING) return;
         this._status = FULFILLED;
         // 依次执行成功队列中的函数，并清空队列
         const runFulfilled = (value) => {
           let cb;
           while ((cb = this._fulfilledQueues.shift())) {
             cb(value);
           }
         };
         // 依次执行失败队列中的函数，并清空队列
         const runRejected = (error) => {
           let cb;
           while ((cb = this._rejectedQueues.shift())) {
             cb(error);
           }
         };
         /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
             当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
           */
         if (val instanceof MyPromise) {
           val.then(
             (value) => {
               this._value = value;
               runFulfilled(value);
             },
             (err) => {
               this._value = err;
               runRejected(err);
             }
           );
         } else {
           this._value = val;
           runFulfilled(val);
         }
       };
       // 为了支持同步的Promise，这里采用异步调用
       setTimeout(run, 0);
     }
     // 添加reject时执行的函数
     _reject(err) {
       if (this._status !== PENDING) return;
       // 依次执行失败队列中的函数，并清空队列
       const run = () => {
         this._status = REJECTED;
         this._value = err;
         let cb;
         while ((cb = this._rejectedQueues.shift())) {
           cb(err);
         }
       };
       // 为了支持同步的Promise，这里采用异步调用
       setTimeout(run, 0);
     }
     // 添加then方法
     then(onFulfilled, onRejected) {
       const { _value, _status } = this;
       // 返回一个新的Promise对象
       return new MyPromise((onFulfilledNext, onRejectedNext) => {
         // 封装一个成功时执行的函数
         let fulfilled = (value) => {
           try {
             if (!isFunction(onFulfilled)) {
               onFulfilledNext(value);
             } else {
               let res = onFulfilled(value);
               if (res instanceof MyPromise) {
                 // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                 res.then(onFulfilledNext, onRejectedNext);
               } else {
                 //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                 onFulfilledNext(res);
               }
             }
           } catch (err) {
             // 如果函数执行出错，新的Promise对象的状态为失败
             onRejectedNext(err);
           }
         };
         // 封装一个失败时执行的函数
         let rejected = (error) => {
           try {
             if (!isFunction(onRejected)) {
               onRejectedNext(error);
             } else {
               let res = onRejected(error);
               if (res instanceof MyPromise) {
                 // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                 res.then(onFulfilledNext, onRejectedNext);
               } else {
                 //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                 onFulfilledNext(res);
               }
             }
           } catch (err) {
             // 如果函数执行出错，新的Promise对象的状态为失败
             onRejectedNext(err);
           }
         };
         switch (_status) {
           // 当状态为pending时，将then方法回调函数加入执行队列等待执行
           case PENDING:
             this._fulfilledQueues.push(fulfilled);
             this._rejectedQueues.push(rejected);
             break;
           // 当状态已经改变时，立即执行对应的回调函数
           case FULFILLED:
             fulfilled(_value);
             break;
           case REJECTED:
             rejected(_value);
             break;
         }
       });
     }
     // 添加catch方法
     catch(onRejected) {
       return this.then(undefined, onRejected);
     }
     // 添加静态resolve方法
     static resolve(value) {
       // 如果参数是MyPromise实例，直接返回这个实例
       if (value instanceof MyPromise) return value;
       return new MyPromise((resolve) => resolve(value));
     }
     // 添加静态reject方法
     static reject(value) {
       return new MyPromise((resolve, reject) => reject(value));
     }
     // 添加静态all方法
     static all(list) {
       return new MyPromise((resolve, reject) => {
         /**
          * 返回值的集合
          */
         let values = [];
         let count = 0;
         for (let [i, p] of list.entries()) {
           // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
           this.resolve(p).then(
             (res) => {
               values[i] = res;
               count++;
               // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
               if (count === list.length) resolve(values);
             },
             (err) => {
               // 有一个被rejected时返回的MyPromise状态就变成rejected
               reject(err);
             }
           );
         }
       });
     }
     // 添加静态race方法
     static race(list) {
       return new MyPromise((resolve, reject) => {
         for (let p of list) {
           // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
           this.resolve(p).then(
             (res) => {
               resolve(res);
             },
             (err) => {
               reject(err);
             }
           );
         }
       });
     }
     finally(cb) {
       return this.then(
         (value) => MyPromise.resolve(cb()).then(() => value),
         (reason) =>
           MyPromise.resolve(cb()).then(() => {
             throw reason;
           })
       );
     }
   }
   ```

2. [ES5 方式手写通俗易懂 Promise 实现](https://juejin.cn/post/6856213486633304078#comment)
   2.1 Promise.all() 要求所有 Promise 都成功才会成功，适用于需要所有异步操作都完成后再进行下一步处理的场景。
   2.2 Promise.race() 只要有一个 Promise 完成就会结束，常用于实现超时控制等场景。
   2.3 Promise.allSettled() 会等待所有 Promise 敲定，返回每个 Promise 的结果，适用于需要知道所有异步操作最终状态的场景。
   2.4 Promise.any() 只要有一个 Promise 成功就会成功，适用于多个异步操作中只要有一个成功即可的场景。

## async/await

1. [await 后跟 promise 与普通函数的区别](https://www.jianshu.com/p/78178c8d3f0a)

- 用 await 声明的 Promise 异步返回，必须“等待”到有返回值的时候，代码才继续执行下去。

## 类的相关属性区别

[JS 面向对象编程相关概念](https://blog.csdn.net/qq_45466204/article/details/115177241)：类相当于实例的原型

1. 私有属性与方法：只能**在类的内部**访问的属性和方法。**通过#声明**,既不能被子类继承，也不能被实例直接继承访问。

   ```js
   class IncreasingCounter {
     #count = 0; // 私有属性
     get value() {
       console.log("Getting the current value!");
       return this.#count;
     }
     increment() {
       this.#count++;
     }
     // 私有方法
     #sum() {
       return this.#a + this.#b;
     }
   }
   ```

2. 静态属性与方法：不需要实例化创建子对象，就可以用类型名直接调用的属性与方法。如 ES5 中 isArray()方法。ES6 class 中**通过 static 关键字**声明，表示**该方法不会被实例继承**，而是直接通过**类来调用**。**继承的子类**可以调用。

   ```js
   class Foo {
     // 静态方法
     static classMethod() {
       return "hello";
     }
     classFn() {
       console.log(Foo.classMethod());
     }
   }
   Foo.classMethod(); // 'hello'
   var foo = new Foo();
   foo.classMethod(); // TypeError: foo.classMethod is not a function

   // 静态属性
   Foo.prop = 1;
   Foo.prop; // 1
   ```

3. 实例属性与方法：通过继承**父类构造函数**中的属性与方法
4. 公有属性与方法：属于这个类的所有对象（原型对象）都可以访问到的属性和方法
