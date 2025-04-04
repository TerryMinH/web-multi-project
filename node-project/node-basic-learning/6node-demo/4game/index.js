/*
 * @Author: TerryMin
 * @Date: 2022-05-04 08:43:38
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-04 08:45:15
 * @Description: file not
 */
// console.log(process.argv);

// const systermPlayer = Math.random() * 10;
// const userPlayer = process.argv[process.argv.length - 1];
// // console.log(systermPlayer, userPlayer);
// if (userPlayer < systermPlayer) {
//     console.log('你输了')
// } else {
//     console.log('你赢了')
// }

const { Buffer } = require('buffer');

const buf = Buffer.from('hello world', 'utf8');
// console.log(buf, buf.toString('hex'))