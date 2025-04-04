/*
 * @Author: TerryMin
 * @Date: 2022-05-20 10:22:16
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-20 10:30:12
 * @Description: file not
 */

// 从字符串创建一个buffer
const buffer1 = Buffer.from('regis');
console.log(buffer1, buffer1.toString());

// 从一个数组创建一个buffer
const buffer2 = Buffer.from([1, 2, 3, 4]);
console.log(buffer2);

// 创建一个长度为20的空buffer
const buffer3 = Buffer.alloc(20);
console.log(buffer3);