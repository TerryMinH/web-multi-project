/*
 * @Author: TerryMin
 * @Date: 2022-05-22 09:26:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-22 09:58:59
 * @Description: file not
 */
const http = require('http');

// 订单服务
const orderApp = http.createServer((req, res) => {
  handleOrderInput(req, res);
});

orderApp.listen(8081, () => {
  console.log('Order Server is running at 8081 port');
});

// 数据服务
const dataApp = http.createServer((req, res) => {
  handleDataInput(req, res);
});

dataApp.listen(8082, () => {
  console.log('Data Server is running at 8082 port');
});

function handleOrderInput(req, res) {
  
  switch (req.url) {
    case '/order/add':
      res.setHeader('Content-Type','text/plain','charset=utf-8')

      res.end(JSON.stringify({ code: 200, msg: "success", data: "订单数据" }));
      break;
    default:
      res.setHeader('Content-Type','text/plain','charset=utf-8')

      res.end('{ code: 500, msg: "route not found", data: "" }');
      break;
  }
}

function handleDataInput(req, res) {
  switch (req.url) {
    case '/data/add':
      res.setHeader('Content-Type','text/plain','charset=utf-8')
      res.end(JSON.stringify({ code: 200, msg: "success", data: "数据库数据" }));
      break;
    default:
      res.setHeader('Content-Type','text/plain','charset=utf-8')
      res.end('{ code: 500, msg: "route not found", data: "" }');
      break;
  }
}

