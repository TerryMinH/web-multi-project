const path = require("path");

// const buffer=Buffer.from('您好!');
// console.log(buffer);
// const str=buffer.toString();
// console.log(str);

// console.log('process.cwd():', process.cwd());
// console.log('__dirname:', __dirname);
// console.log('__filename:', __filename);
const currentPath=path.resolve();
console.log(currentPath);