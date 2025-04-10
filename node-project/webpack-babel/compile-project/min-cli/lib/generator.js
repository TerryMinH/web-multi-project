/*
 * @Author: TerryMin
 * @Date: 2025-04-10 21:08:37
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-10 21:31:01
 * @Description: file not
 */
const fs = require("fs");
const path=require('path');
const pathUrl=path.resolve('lib/create.js')
console.log('pathUrl',pathUrl);
const result = fs.readFileSync(pathUrl);
console.log(result);
