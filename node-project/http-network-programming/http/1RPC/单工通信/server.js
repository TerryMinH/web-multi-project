/*
 * @Author: TerryMin
 * @Date: 2022-05-19 16:43:36
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-19 16:58:11
 * @Description: file not
 */
const net = require('net');

const { searchBookName } = require('../code');

const server = net.createServer((socket) => {
    socket.on('data', (buffer) => {
        socket.write(searchBookName(buffer.toString()))
    })
})
server.listen(3000)