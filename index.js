/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-08 18:00:35
 * @Description: file not
 */
function before(fn, beforeFn) {
  return function () {
    beforeFn.apply(this, arguments);
    return fn.apply(this, arguments);
  };
}
function after(fn, afterFn) {
  return function () {
    return function () {
      const result = fn.apply(this, arguments);
      afterFn.apply(this, arguments);
      return result;
    };
  };
}
let doSomething = () => console.log("执行业务逻辑");
doSomething = before(doSomething, () => console.log("执行前记录日志"));
console.log('doSomething',doSomething);
// doSomething = after(doSomething, () => console.log("执行后清理资源"));
// doSomething();
