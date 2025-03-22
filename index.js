/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-22 20:12:06
 * @Description: file not
 */
const arr1 = [1, 2, 5, 3, 2, 4, 2];

// const arr2 = arr1.reduce((sum, current, index) => {
//   if (!sum.includes(current)) {
//     sum.push(current);
//   }
//   return sum;
// }, []);

// console.log(arr2);
function removeDuplicationInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
