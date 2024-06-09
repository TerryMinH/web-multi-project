/*
 * @Author: TerryMin
 * @Date: 2022-01-21 16:11:05
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-21 17:23:02
 * @Description: file not
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

const host = '127.0.0.1';
const port = 8080;

http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log('Request for' + pathname + ' received');
  if (pathname !== '/favicon.ico') {
    const showPaper = (path, status) => {
      const content = fs.readFileSync(path);
      res.writeHead(status, { 'Content-Type': 'text/html;charset=utf-8' });
      res.write(content);
      res.end();
    }
    switch (pathname) {
      case '/':
      case '/home':
        showPaper('./view/home.html', 200);
        break;
      case '/about':
        showPaper('./view/about.html', 200);
        break;
      default:
        showPaper('./view/404.html',200)
    }
  }


}).listen(port, host)
console.log(`服务器运行在 http://${host}:${port}/`)

