/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-03 13:11:43
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

Array.prototype.myFill = function (value, start, end) {
  let len = this.length,
    currentStart,
    currentEnd;

  if (start < 0) {
    if (start < -len) {
      currentStart = 0;
    } else {
      currentStart = len + start;
    }
  } else if (start < len) {
    currentStart = start;
  }

  if (end < 0) {
    if (end < -len) {
      currentEnd = 0;
    } else {
      currentEnd = end + len;
    }
  } else if (end < len) {
    currentEnd = end;
  } else {
    currentEnd = len;
  }
  if (currentStart < currentEnd) {
    for (let i = 0; i < len; i++) {
      if (currentStart <= i && i < currentEnd) {
        this[i] = value;
      }
    }
  }
  return this;
};

Array.prototype.customFillRecursive = function (value, start, end) {
  if (start >= end) {
    return this;
  }
  // const newArray = [...this];
  this[start] = value;
  return this.customFillRecursive(value, start + 1, end);
};

function fibonaccMemo(n, memo = {}) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = fibonaccMemo(n - 1, memo) + fibonaccMemo(n - 2, memo);
  return memo[n];
}
// console.log(array1.myFill(0, 1, 2));
// let longestCommonPrefix = function (str) {
//   if (str.length === 0) return "";
//   let res = str[0];
//   for (let i = 1; i < str.length; i++) {
//     let j = 0;
//     for (; j < res.length && j < str[i].length; j++) {
//       if (res[j] !== str[i][j]) {
//         break;
//       }
//     }
//     console.log(res);
//     res = res.substring(0, j);
//     if (res === "") {
//       return str;
//     }
//   }
//   return res;
// };
let longestCommonPrefix = function (strArr) {
  if (strArr.length === 0) return "";
  let res = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    let j = 0;
    for (; j < res.length && j < strArr[i].length; j++) {
      if (res[j] !== strArr[i][j]) {
        break;
      }
    }
    res = res.substring(0, j);
  }
  if (res.length === 0) return "";
  return res;
};
const strArr = ["aaafsd", "aaaawwewer", "aaaddfff"];
// console.log(longestCommonPrefix(strArr));

function wait(delay, value) {
  return new Promise((resolve, reject) => {
    if (delay < 0 || Number.isNaN(delay)) {
      reject(new Error("等待时间必须是一个非负整数"));
    }
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}
