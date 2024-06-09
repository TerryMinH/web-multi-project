/*
 * @Author: TerryMin
 * @Date: 2022-01-21 15:03:18
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-21 15:25:25
 * @Description: file not
 */
const fs = require('fs');
const path = require('path');
const filedir = './test';

fs.watch(filedir, (ev, file) => {
  const arr = [];
  const travel = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
      const pathname = path.join(dir, file);
      if (fs.statSync(pathname).isDirectory()) {
        travel(pathname);
      } else {
        arr.push(pathname);
      }
    })
  }

  travel(filedir);
  const concat = (arr) => {
    let content = '';
    arr.forEach((item) => {
      const c = fs.readFileSync(item);
      content += c.toString() + '\n';
    });
    fs.writeFile('./result.js', content,(err)=>{
      if(err) return console.error(err);
    });
  }
  concat(arr);
})