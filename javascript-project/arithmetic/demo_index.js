// 计算两个数的最大公约数
function gcd(a, b) {
  while (b!== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

// 计算数组中所有子数组的最大公约数的最大值
function maxGCDOfSubarrays(arr) {
  let maxGCD = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          let currentGCD = arr[i];
          for (let k = i + 1; k <= j; k++) {
              currentGCD = gcd(currentGCD, arr[k]);
          }
          maxGCD = Math.max(maxGCD, currentGCD);
      }
  }
  return maxGCD;
}

// 直接获取数组的最大值
function maxValueInArray(arr) {
  return Math.max(...arr);
}

const arr = [2, 4, 6, 8,9];
console.log("数组中可变长度子数组的最大公约数的最大值: ", maxGCDOfSubarrays(arr));
console.log("数组中的最大值: ", maxValueInArray(arr));