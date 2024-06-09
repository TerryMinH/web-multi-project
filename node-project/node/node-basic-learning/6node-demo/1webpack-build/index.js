/*
 * @Author: TerryMin
 * @Date: 2022-01-19 14:17:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-21 14:54:10
 * @Description: file not
 */
const fs = require('fs'); // 引入文件系统模块
const projectData = {
  'name': 'test',
  'fileData': [
    {
      'name': 'css',
      'type': 'dir'
    },
    {
      'name': 'js',
      'type': 'dir'
    },
    {
      'name': 'images',
      'type': 'dir'
    },
    {
      'name': 'index.html',
      'type': 'file',
      'content': '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello</h1>\n\t</body>\n</html>',
    }
  ]
};

if (projectData.name) {
  fs.mkdirSync(projectData.name);
  const fileData = projectData.fileData;
  if (fileData && fileData.forEach) {
    fileData.forEach((f) => {
      f.path = projectData.name + '/' + f.name;
      f.content = f.content || '';
      switch (f.type) {
        case 'dir':
          fs.mkdirSync(f.path);
          break;
        case 'file':
          fs.writeFileSync(f.path, f.content);
          break;
        default:
          break;
      }
    })
  }
}