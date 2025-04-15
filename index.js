/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-15 09:37:20
 * @Description: file not
 */
function addBigNumbers(a, b) {
  a = a.toString();
  b = b.toString();
  let maxlength = Math.max(a.length, b.length);
  a = a.padStart(maxlength, "0");
  b = b.padStart(maxlength, "0");
  let carry = 0,
    result = "";
  for (let i = maxlength - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
}
// console.log(addBigNumbers(99, 4));

function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}
@testable(true)
class MyTestableClass {}
console.log(MyTestableClass.isTestable);

function logged(value, { kind, name }) {
  if (kind === "class") {
    return class extends value {
      constructor(...args) {
        super(...args);
      }
    };
  }
}
