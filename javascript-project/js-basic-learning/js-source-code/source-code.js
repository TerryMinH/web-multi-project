/*
 * @Author: TerryMin
 * @Date: 2022-09-30 09:20:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-06-30 09:36:26
 * @Description: file not
 */

// 节流函数: 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
/**
 * @func: func
 * @descripition: let throttleFn = throttle(() => {console.log('throttle')});
 * @param {*} fn
 * @param {*} delay
 */
const throttle = (fn, delay = 1 * 1000) => {
  console.log(this, delay);
  let timer;
  return (...args) => {
    console.log(89);
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

//  防抖函数: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
/**
 * @func: func
 * @descripition: 示例 let DebounceFn = debounce(() => {console.log('debounce')});
 * @param {*} fn
 * @param {*} delay
 */
const debounce = (fn, delay = 1 * 1000) => {
  let timer;
  return (...args) => {
    console.log("debounce");
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// apply实现
Function.prototype.newApply = function (context, parameter) {
  if (typeof context === "object") {
    context = context || window;
  } else {
    context = Object.create(null);
  }
  const fn = Symbol();
  context[fn] = this;
  context[fn](...parameter);
  delete context[fn];
};

const person = {
  name: "Abibi",
};
const sayHi = (age, sex) => {
  console.log(this.name, age, sex);
};
// sayHi.newApply(person, [25, "男"]);

const sayHello =  (age, sex)=> {
  console.log(this.name, age, sex);
};
