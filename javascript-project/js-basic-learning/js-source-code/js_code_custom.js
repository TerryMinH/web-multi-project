/*
 * @Author: TerryMin
 * @Date: 2025-04-19 10:22:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-25 16:56:43
 * @Description: file not
 */
// 自定义reduce方法
Array.prototype.customReduce = function (callback, initialValue) {
  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

Array.prototype.customMap = function (callback, thisArg) {
  const length = this.length;
  let newArray = new Array(length);
  for (let index = 0; index < length; index++) {
    // 利用hasOwnProperty方法检测空值
    if (this.hasOwnProperty(index)) {
      newArray[index] = callback.call(thisArg, this[index], index, this);
    }
  }
  return newArray;
};

Array.prototype.customForEach = function (callback, thisArg) {
  // 检查this是否为null或undefined
  if (this == null) {
    throw new TypeError(
      "Array.prototype.customForEach called on null or undefined"
    );
  }
  // 检查callback是否为函数
  if (typeof callback !== "function") {
    throw new TypeError(callback + ` is not a function`);
  }
  // 将this转换为对象
  const array = Object(this);
  // 无符号右移确保为整数
  const length = array.length >>> 0;
  for (let i = 0; i < length; i++) {
    if (i in array) {
      callback.apply(thisArg, array[i], i, array);
    }
  }
};
