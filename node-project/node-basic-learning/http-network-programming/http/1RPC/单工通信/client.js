/*
 * @Author: TerryMin
 * @Date: 2022-05-19 16:43:02
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-19 16:44:33
 * @Description: file not
 */
const net = require('net');

const { getRandomBookId } = require('../code');
const socket = new net.Socket();

socket.connect({
    host: '127.0.0.1',
    port: 3000
})

const encode = (bookId) => {
    const buffer = Buffer.alloc(2);
    buffer.write(bookId);
    console.log(buffer);
    return buffer;
}

const bookId = getRandomBookId();

socket.write(encode(bookId));

socket.on('data', (buffer) => {
    console.log(`书籍 ${bookId}:${buffer.toString()}`);

})