/*
 * @Author: TerryMin
 * @Date: 2025-02-23 10:01:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-23 11:12:08
 * @Description: file not
 */
const arr1 = [1, 5, 2, 3, 8];
console.log(arr1.sort((a, b) => b - a));
function getSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let restTarget = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if ((restTarget = nums[j])) {
        return [i, j];
      }else{
        return;
      }
    }
  }
}
