/*
 * @Author: TerryMin
 * @Date: 2025-04-19 10:22:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-22 14:00:10
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
