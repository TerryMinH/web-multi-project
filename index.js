/*
 * @Author: TerryMin
 * @Date: 2024-07-29 17:58:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-13 17:37:36
 * @Description: file not
 */

function hasKey(obj, keys) {
  var o = obj;
  keys.slice(0, -1).forEach(function (key) {
    o = o[key] || {};
  });
  console.log(o);
  var key = keys[keys.length - 1];
  return key in o;
}

const obj1 = {
  name: `terry`,
  age: 18,
  address: `beijing`,
};
const arr1 = ["name", "age", "address"];

console.log(hasKey(obj1, arr1));
