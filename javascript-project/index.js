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
  const total = flowerbed.reduce((acc, current, index, array) => {
    if (current === 0 && array[index + 1] === 0 && array[index + 2] === 0) {
      array[index + 1] = 1;
      return (acc = acc + 1);
    }
  }, 0);
  console.log(total);
  return total === n;
};
