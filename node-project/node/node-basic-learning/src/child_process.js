/*
 * @Author: TerryMin
 * @Date: 2024-09-18 09:56:03
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-18 10:05:55
 * @Description: file not
 */

// [node子进程](https://www.cnblogs.com/chyingp/p/node-learning-guide-child_process.html)
const { exec,spawn } = require("child_process")
const os = require("os")
// console.log(os.userInfo());

// const ls = spawn('ls', ['-lh', '/usr']);
// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
