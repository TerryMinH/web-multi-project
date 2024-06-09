/*
 * @Author: TerryMin
 * @Date: 2023-02-06 15:40:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-06 15:51:53
 * @Description: file not
 */
let http=require('http');
let url=require('url');
let querystring=require('querystring');
let fs=require('fs');

http.createServer(function(req,res){
    let reqBody='';
    req.on('data',function(data){
        reqBody+=data;
    });
    
    req.on('end',function(){
        res.writeHead(200,{"Content-type":'text/html'});
        res.write(`you have sent a ${req.method} request`);
        res.write(`
        <p>Content-Type:${req.headers['content-type']}</p>
        <p>Data:your name is ${querystring.parse(reqBody).user}</p>
        <p>Data:your password is ${querystring.parse(reqBody).pwd}</p>
        `);
        res.end();
    })
}).listen(7777)