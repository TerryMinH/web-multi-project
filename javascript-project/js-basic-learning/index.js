/*
 * @Author: TerryMin
 * @Date: 2022-06-11 14:41:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-11 10:12:03
 * @Description: file not
 */
const flowerbed = [1, 0, 0, 0, 1],
  n = 1;
var canPlaceFlowers = function (flowerbed, n) {
  let total = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    console.log(i, flowerbed[i]);
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        total++;
      }
    }
  }
  console.log(total);
  return total === n;
};
console.log(canPlaceFlowers(flowerbed, n));
