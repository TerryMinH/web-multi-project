/*
 * @Author: TerryMin
 * @Date: 2022-05-19 17:58:16
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-19 17:58:43
 * @Description: file not
 */
const net = require('net');
const { searchBookName } = require('../code');

const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        setTimeout(() => {
            socket.write(searchBookName(buffer.toString()));
        }, 1000);
    });
});

server.listen(3000);