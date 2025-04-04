/*
 * @Author: TerryMin
 * @Date: 2021-12-11 15:38:01
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-18 09:56:43
 * @Description: fs path模块
 */
const { log } = require("console");
const fs = require("fs");
const path = require("path");
const util = require("util");
const moduleObj = require("./util-index");

// console.log(moduleObj);

// 将目录解析成绝对路径
const resolvePath = (dir) => {
  console.log("resolvePath==>", __dirname);
  console.log(path.resolve(__dirname, dir));
};
// resolvePath('./indexjs');

// path API 测试
const handlePathApi = () => {
  /**
   * https://www.jb51.net/article/179721.htm
   * **/
  const _extname = path.extname("index.js"); // 从最后一个'.'到字符串的末尾。如果最后一个部分没有'.'，或者路径是以'.'开头，则返回空字符串

  const _basename = path.basename("index.js", ".js"); // 返回路径的最后一个部分，即文件名。参数ext为需要截掉的后缀内容

  const _basenameHtml = path.basename("demo.html", ".html");

  const _dirPath = path.dirname("terrymin/test/index.js"); // 返回路径p所在的目录

  console.log({
    _extname,
    _basename,
    _basenameHtml,
    _dirPath,
  });
};

// handlePathApi();

// File API 测试
const handleFileRead = () => {
  const bufSync = fs.readFileSync("./dataBase/test.txt");
  const dataSync = fs.readFileSync("./dataBase/test.txt", "utf8");

  // 异步
  fs.readFile("./dataBase/test.txt", "utf8", (err, data) => {
    console.log(err, data);
  });

  console.log(bufSync);
  console.log(dataSync);
  return {
    bufSync,
    dataSync,
  };
};
// handleFileRead();

const handleFileWrite = () => {
  fs.writeFileSync("./dataBase/1.js", "const a='Hello world JavaScript!'");

  fs.writeFile("./dataBase/2.txt", "Hi Nodejs", (err) => {
    if (!err) {
      fs.readFile("./dataBase/2.txt", "utf8", (err, data) => {
        console.log(data);
      });
    }
  });
};

// --------------------------------------

const createWriteStream = async () => {
  const stats = await util.promisify(fs.stat)("dataBase");
  // console.log(stats);
  // console.log(stats.isDirectory());
  // console.log(stats.isFile());
};
// createWriteStream();

const readStream = () => {
  let readStream = fs.createReadStream("./dataBase/test.txt");

  let count = 0;
  let str = "";
  readStream.on("data", (data) => {
    str += data;
    count++;
  });

  readStream.on("end", () => {
    console.log("count:", count);
    console.log("str:", str);
  });

  readStream.on("error", (err) => {
    console.log(err);
  });
};
// readStream();

const writeStream = () => {
  let str = "";
  for (let i = 0; i < 500; i++) {
    str += "这是写入流输出的数据\n";
  }

  let writeStream = fs.createWriteStream("./dataBase/output.text");

  writeStream.write(str);
  writeStream.end();
  writeStream.on("finish", () => {
    console.log("写入完成");
  });
};
// writeStream();
// -----------------------------------------

// 文件读写
const handleFile = () => {
  fs.access("./dataBase/a.txt", fs.constants.F_OK, (err) => {
    console.log(err ? "文件不存在" : "文件存在");
    if (err) {
      fs.writeFile("./dataBase/a.txt", "hello Terrymin", (err) => {
        if (err) console.log(err);
        const result = fs.readFileSync("./dataBase/a.txt");
        console.log(result);
      });
    } else {
      fs.unlinkSync("./dataBase/a.txt");
    }
  });

  fs.writeFileSync("./dataBase/b.txt", "测试数据");
  fs.appendFile("./dataBase/b.txt", "这是追加写入的内容\n", (err) => {
    if (err) console.log(err);
    console.log("追加成功");
  });
};

// 文件夹目录创建删除
const handleDir = () => {
  const states = fs.existsSync("./dataBase/css");
  console.log(states);
  if (!states) {
    fs.mkdir("./dataBase/css", (err) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log("创建成功");
      const files = fs.readdirSync(__dirname);
      console.log("读取文件目录:", files);
    });
  } else {
    console.log("目录已存在");
    fs.rmdir("./dataBase/css", (err) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log("删除目录成功");
    });
  }
};
// handleDir();
