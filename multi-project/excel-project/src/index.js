/*
 * @Author: TerryMin
 * @Date: 2024-07-29 09:02:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-08-20 10:53:05
 * @Description: file not
 */
const nodeFs = require("fs");
const fs = require("fs-extra");

const packageObj = fs.readJsonSync("../package.json");
// console.log(packageObj) // => 2.0.0
const packFile = nodeFs.readFileSync("../package.json", { encoding: "utf-8" });
console.log(packFile);
