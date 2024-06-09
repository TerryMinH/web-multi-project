/*
 * @Author: TerryMin
 * @Date: 2023-08-11 11:09:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-08-11 11:10:35
 * @Description: file not
 */
// throttle 和 debouce 函数的底层实现
const limit = function (func, wait, debounce) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    // 封装函数,用于延迟调用
    let throttler = function () {
      // 只是节流函数的时候,对其timeout进行赋值为null,这样可以设置下一次的setTimtout
      timeout = null;
      func.apply(context, args);
    };
    // 如果debouce是true的话,前一个函数的调用timeout会被清空,不会被执行
    // 就是debounce函数的调用,这个前一个函数的不会执行.下面会重新设定setTimeout用于
    // 执行这一次的调用.
    // 但是如果是throttle函数,则会执行前一个函数的调用,同时下面的setTimeout在
    // 函数没有运行的时候,是无法再次设定的.
    if (debounce) clearTimeout(timeout);
    // 如果debouce是true 或者 timeout 为空的情况下,设置setTimeout
    if (debounce || !timeout) timeout = setTimeout(throttler, wait);
  };
};

// throttle 节流函数
export const throttle = (func, wait) => {
  return limit(func, wait, false);
};

// debouce 多次调用,只执行最后一次.
export const debounce = (func, wait) => {
  return limit(func, wait, true);
};
