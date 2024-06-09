/*
 * @Author: TerryMin
 * @Date: 2021-12-28 13:28:41
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-28 16:51:21
 * @Description: file not
 */

// 在 AMD中 math.js
define(['m1'], function (m1) {
  console.log('我是math, 我被加载了...')
  var add = function (a, b) {
    return a + b;
  }
  var print = function () {
    console.log(m1.name)
  }
  return {
    add: add,
    print: print
  }
})

// 在CMD中math.js
define(function (require, exports, module) {
  console.log('我是math, 我被加载了...')
  var m1 = require('m1');
  var add = function (a, b) {
    return a + b;
  }
  var print = function () {
    console.log(m1.name)
  }
  module.exports = {
    add: add,
    print: print
  }
})  