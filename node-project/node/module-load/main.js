/*
 * @Author: TerryMin
 * @Date: 2022-06-20 14:19:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-01-31 11:25:12
 * @Description: file not
 */
import { age, setAge, obj } from "./lib.js";
// const ageValue = age+1;
// console.log(ageValue, age);

const obj1 = obj;
obj1.num++;
// console.log(obj1, obj);

var toString = Object.prototype.toString;

var isType = function (type) {
  return function (obj) {
    return toString.call(obj) == "[object " + type + "]";
  };
};

var isString = isType("String");
var isFunction = isType("Function");
console.log(isString('str'));

