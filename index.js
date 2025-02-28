/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-28 08:36:31
 * @Description: file not
 */

// 编写一个函数，将arr1和arr2合并，并按照id排序，如果id相同则取time较大的那个对象，如果id不同则保留arr1和arr2中的对象。
// 输入数据 arr1，arr2
const arr2 = [
  {
    id: 1,
    name: "bob",
    time: "4",
  },
  {
    id: 2,
    name: "Nick",
    time: "2",
  },
  {
    id: 4,
    name: "Mark",
    time: "2",
  },
  {
    id: 5,
    name: "Frank",
    time: "6",
  },
];

Array.prototype.MyReducer = function (callback, initalVal) {
  for (let i = 0; i < this.length; i++) {
    initalVal = callback(initalVal, this[i], i, this);
  }
  return initalVal;
};

const sum1 = arr2.reduce((acc, current, index) => {
  acc = acc + current.id;
  return acc;
}, 0);
const sum2 = arr2.MyReducer((acc, current, index) => {
  acc = acc + current.id;
  return acc;
}, 0);
// console.log(11, sum1, sum2);

Array.prototype.filter1 = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not function`);
  }
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && newArr.push(this[i]);
  }
  return newArr;
};

// 防抖
function debounce(callback, delay) {
  let timeId;
  return function () {
    let context = this,
      arg = arguments;
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      callback.apply(context, arg);
    }, delay);
  };
}

// 节流 单位时间只能执行一次
function throttle(callback, delay) {
  let timeId;
  return function () {
    let context = this,
      arg = arguments;
    if (timeId) {
      return;
    }
    timeId = setTimeout(() => {
      callback.apply(context, arg);
      clearTimeout(timeId);
    }, delay);
  };
}
const array1 = [1, 2, 3];
const arr3 = array1.slice(5); // 1,2,3
const arr4 = array1.slice(-1); // 3
const arr5 = array1.slice(-5); // 1,2,3
console.log(arr3, arr4, arr5, array1);
