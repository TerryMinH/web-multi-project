/*
 * @Author: TerryMin
 * @Date: 2024-06-09 10:07:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-06 09:48:37
 * @Description: file not
 */
const fs = require("fs");
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello, ");
writeStream.write("world!");

writeStream.on("finish", () => {
  console.log("数据写入流");
});

writeStream.on("error", (error) => {
  console.log("写入数据时出错：", error);
});
// const buf1 = Buffer.from("hello", "utf8");
// const buf2 = Buffer.alloc(10);
// const buf3 = Buffer.from([1, 2, 3]);
// console.log(buf1,buf1.toString());
// console.log(buf2);
// console.log(buf3);
