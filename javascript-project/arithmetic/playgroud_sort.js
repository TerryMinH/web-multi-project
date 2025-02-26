/*
 * @Author: TerryMin
 * @Date: 2023-09-18 13:50:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-26 10:50:25
 * @Description: file not
 */
// 计数排序
let countingSort = function (arr, flag = 0) {
  let min = arr[0],
    max = arr[0],
    len = arr.length; // 求最大最小值
  for (let i = 0; i < len; i++) {
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);
  } // 1.计算出差值d,最小值小于0,加上本身add
  let d = max - min,
    add = min < 0 ? -min : 0; //2.创建统计数组并统计对应元素个数
  let countArray = new Array(d + 1 + add).fill(0);
  for (let i = 0; i < len; i++) {
    let demp = arr[i] - min + add;
    countArray[demp] += 1;
  } //3.统计数组做变形，后面的元素等于前面的元素之和,也就是排名数组
  let sum = 0; // 这里需要遍历的是countArray数组长度

  for (let i = 0; i < d + 1 + add; i++) {
    sum += countArray[i];
    countArray[i] = sum;
  }
  let res = new Array(len);
  //     4.遍历原始数组,从统计数组中找到正确位置,输出到结果数组
  for (let i = 0; i < len; i++) {
    let demp = arr[i] - min + add;
    res[countArray[demp] - 1] = arr[i];
    countArray[demp]--;
  }
  return flag ? res.reverse() : res;
};

let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2];
// console.log(countingSort(arr));

// 冒泡排序
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.legnth - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  if (arr.length == 0) {
    return [];
  }

  var cIndex = Math.floor(arr.length / 2);
  var c = arr.splice(cIndex, 1);
  var l = [];
  var r = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }
  return quickSort(l).concat(c, quickSort(r));
}

// 插入排序
function insertSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

// 希尔排序
function shellSort(arr) {
  var len = arr.length;
  console.log(len);
  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    console.log(gap);
    for (var i = gap; i < len; i++) {
      var j = i;
      var current = arr[i];
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}
