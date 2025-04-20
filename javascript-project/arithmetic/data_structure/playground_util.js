/*
 * @Author: TerryMin
 * @Date: 2023-09-18 13:50:26
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-20 11:07:01
 * @Description: file not
 */
// 最大公约数求解 欧几里得算法（辗转相除法）
function gcdMax(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// 最大公约数求解 更相减损术
function getSub(a, b) {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return b;
}

