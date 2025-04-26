/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-25 16:01:28
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

// 提取最长字符串
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
// const strArr = ["aaafsd", "aaaawwewer", "aaaddfff"];

// 千分位
let thousandSeparator = function (num) {
  let numStr = num.toString();
  let result = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return result;
};
// 测试示例
// console.log(thousandSeparator2(1234567.45)); // 输出: 1,234,567

// 文件批量下载 有一组下载链接urls,每次支持limitN次同时下载，下载完成后执行done函数
function batchDownload(urls, limitN, done) {
  let queue = [...urls],
    activeCount = 0;
  async function download() {
    if (queue.length === 0 && activeCount === 0) {
      return done();
    }
    if (activeCount >= limitN || queue === 0) {
      return;
    }
    const url = queue.shift();
    console.log(url, activeCount);
    activeCount++;
    try {
      const response = await fetch(url);
      console.log(response);
      const blob = await response.bob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = url;
      link.click();
      URL.revokeObjectURL(link.href);
      activeCount--;
      download();
    } catch (error) {
      console.log(`下载${url}出错`);
    }
  }

  for (let i = 0; i < Math.min(limitN, urls.length); i++) {
    download();
  }
}
// 如何实现这个不报错: 自定义迭代器
// const [x,y]={x:1,y:2}

// 实现两个大数相加
function addBigNumbers(a, b) {
  // 确保输入是字符串
  a = a.toString();
  b = b.toString();

  // 补零使长度相同
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let carry = 0;
  let result = "";

  // 从最低位开始相加
  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10); // 进位
    result = (sum % 10) + result; // 进位之后余数拼接
  }
  // 处理最后的进位
  if (carry > 0) {
    result = carry + result;
  }

  return result;
}
// 示例
// console.log(addBigNumbers(1789, 9537));

// 腾讯/前程无忧 这个解构能否执行 解答：数组解构语法 [] 只能用于可迭代对象（如数组、字符串、Map、Set等）
// 普通对象 { a: 1, b: 2 } 默认不是可迭代对象（没有实现 [Symbol.iterator] 方法）
const [a, b] = { a: 1, b: 2 };
const iterableObj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: function* () {
    yield this.a;
    yield this.b;
  },
};

// 拼多多 实现一个Promise.all
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

// **拼多多 js 实现将菜单一维数组转为树形结构如何实现((它的作用是将一个 扁平化的数组 转换成 嵌套的树形结构数据))**
function buildTreeOptimized(flatArray) {
  const map = {};
  const tree = [];

  // 首先将所有节点存入映射表
  flatArray.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // 构建树结构
  flatArray.forEach((item) => {
    if (item.parentId === null) {
      tree.push(map[item.id]);
    } else {
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.id]);
      }
    }
  });

  return tree;
}
const flatMenu = [
  { id: 1, name: "首页", parentId: null },
  { id: 2, name: "产品", parentId: null },
  { id: 3, name: "产品1", parentId: 2 },
  { id: 4, name: "产品2", parentId: 2 },
  { id: 5, name: "关于", parentId: null },
  { id: 6, name: "联系方式", parentId: 5 },
  { id: 7, name: "产品1-1", parentId: 3 },
];
const menuTree = buildTreeOptimized(flatMenu);
// console.log(JSON.stringify(menuTree, null, 2));

// 武汉一触即通数码科技(外企)如何将嵌套对象生成指定的字符串(它的作用是将一个 嵌套的树形结构数据 转换成 扁平化的路径数组)
function generatePaths(data, currentPath = "") {
  let result = [];
  for (const item of data) {
    const newPath = currentPath
      ? `${currentPath}/${item.name}`
      : `${item.name}`;
    if (!item.child) {
      result.push(newPath);
    } else {
      result = result.concat(generatePaths(item.child, newPath));
    }
  }
  return result;
}
const nestArr = [
  {
    name: "home",
    child: [
      {
        name: "README.md",
      },
      {
        name: "index.html",
      },
      {
        name: "asserts",
        child: [
          {
            name: "logo.png",
          },
        ],
      },
    ],
  },
  {
    name: "test",
    child: [
      {
        name: "unit-test",
        child: [
          {
            name: "home",
            child: [
              {
                name: "login",
                child: [
                  {
                    name: "test.js",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
