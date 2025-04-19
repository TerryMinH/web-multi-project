/*
 * @Author: TerryMin
 * @Date: 2021-03-02 13:36:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-12-29 11:34:54
 * @Description: file not
 */
const { transform } = require('@babel/core');

const fs = require('fs');

const before = fs.readFileSync('./before.js', 'utf8');
console.log(before);

const res = transform(`${before}`, {
  plugins: [require('./plugin')]
});

fs.existsSync('./after.js') && fs.unlinkSync('./after.js');

fs.writeFileSync('./after.js', res.code, 'utf8');





