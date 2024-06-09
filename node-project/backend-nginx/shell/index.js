/*
 * @Author: TerryMin
 * @Date: 2022-06-28 11:26:23
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-02 20:39:18
 * @Description: file not
 */
const fs=require('fs');
const jsonFile=require('./server.json');

console.log(__dirname);
filenames = fs.readdirSync(__dirname); 
  
console.log("\nCurrent directory filenames:"); 
filenames.forEach(file => { 
  console.log(file); 
}); 
// fs.readFile('./server.json','utf8',(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
// })
// console.log(jsonFile);
