/*
 * @Author: TerryMin
 * @Date: 2023-09-18 13:50:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-26 11:00:14
 * @Description: file not
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
