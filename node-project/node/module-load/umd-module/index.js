/*
 * @Author: TerryMin
 * @Date: 2022-07-26 13:58:19
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-07-26 14:14:51
 * @Description: file not
 */

;(function (root, factory) {
  console.log(module);
	// console.log(root,define)
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory()
	} else if (typeof define === "function" && define.amd) {
		define(factory)
	} else if (typeof define === "function" && define.cmd) {
		define(function (require, exports, module) {
			module.exports = factory()
		})
	} else {
		root.umdModule = factory()
	}
})(this, function () {
	return {
		name: "我是一个umd模块",
	}
})
