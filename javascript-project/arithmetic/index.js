/*
 * @Author: TerryMin
 * @Date: 2023-09-18 13:50:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-09-28 15:49:00
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

const insertSort = (arr) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
console.log(insertSort(arr));
