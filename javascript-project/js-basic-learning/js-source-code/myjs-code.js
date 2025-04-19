/*
 * @Author: TerryMin
 * @Date: 2025-04-19 10:22:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-19 10:27:31
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
