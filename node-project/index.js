/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-12 09:39:55
 * @Description: file not
 */
const path = require("node:path");
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

// if (cluster.isMaster) {
//   console.log(`主进程 ${process.pid} 正在运行`);

//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`工作进程${worker.process.pid}已退出`);
//   });
// } else {
//   http
//     .createServer((req, res) => {
//       res.writeHead(200,{'content-type':'text/plain;charset=utf-8'});
//       res.end("hello world 你好,世界!");
//     })
//     .listen(8000,()=>{
//         console.log(`http://localhost:8000`);
//     });
//   console.log(`工作进程${process.pid}已启动`);
// }
console.log(__dirname);
console.log(__filename);
console.log(path.resolve(__dirname,'index.js'));
