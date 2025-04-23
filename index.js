/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-22 16:56:13
 * @Description: file not
 */
// 节流函数
 function throttle(fn, delay = 1000) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}
// 防抖函数
 function debounce(fn, delay = 1000) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completeCounts = 0;
    let len = promises.length;
    if (len === 0) {
      return resolve(result);
    }
    promises.forEach((promiseItem) => {
      promiseItem
        .then((value) => {
          result.push(value);
          completeCounts++;
          if (completeCounts === len) {
            return resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        });
    });
  });
}

const [a, b] = { 
  a: 1, 
  b: 2 ,
  [Symbol.iterator](){
    yield this.a;
    yield this.b
  }
};
console.log(a,b);