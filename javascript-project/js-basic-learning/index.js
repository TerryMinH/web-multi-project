const setDelay = (millisecond) => {
  return new Promise((resolve, reject) => {
    if (typeof millisecond != "number")
      reject(new Error("参数必须是number类型"));
    setTimeout(() => {
      resolve(`我延迟了${millisecond}毫秒后输出的`);
    }, millisecond);
  });
};

const setDelaySecond = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds != "number" || seconds > 10)
      reject(new Error("参数必须是number类型，并且小于等于10"));
    setTimeout(() => {
      console.log(
        `先是setDelaySeconds函数输出，延迟了${seconds}秒，一共需要延迟${
          seconds + 2
        }秒`
      );
      resolve(setDelay(2000)); // 这里依赖上一个Promise
    }, seconds * 1000);
  });
};

setDelay("我是字符串")
  .then(
    (result) => {
      console.log(result); // 不进去了
    },
    (val) => {
      console.log(22, val);
    }
  )
  .catch((err) => {
    console.log(11, err); // 输出错误：“参数必须是number类型”
  });
Array.prototype.customReduce = function (callback, initialValue) {
  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;
  if (initialValue === undefined) {
    if (array.length === 0) {
      return new TypeError("reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};
