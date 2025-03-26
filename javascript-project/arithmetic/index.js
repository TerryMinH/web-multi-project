/*
 * @Author: TerryMin
 * @Date: 2023-09-18 13:50:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-25 17:38:42
 * @Description: file not
 */
function grayArithmetic() {}

function maxSubArray(arr) {
  const n = arr.length;
  const dp = new Array(n);
  dp[0] = arr[0];
  let maxSum = dp[0];

  for (let i = 0; i < n; i++) {
    // 前多项和相加如果没有特定某项大,则从特定某项开始重新计算
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function insertSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
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
console.log(insertSort(nums));
