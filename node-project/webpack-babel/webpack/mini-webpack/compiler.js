/*
 * @Author: TerryMin
 * @Date: 2022-09-24 14:30:02
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-24 15:24:46
 * @Description: file not
 */
const fs = require("fs");
const parser = require("@babel/parser");
const options = require("./webpack.config");
const path = require("path");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;

    this.output = output;

    this.modules = [];
  }
  run() {
    const { getAst, getDependecies } = Parser;

    const ast = getAst(this.entry);

    const dependecies = getDependecies(ast, this.entry);

    const code = getCode(ast);

    const info = this.bind(this.entry);
    this.modules.push(info);

    this.modules.forEach(({ dependecies }) => {
      if (dependecies) {
        for (const dependency in dependecies) {
          this.modules.push(this.build(dependecies[dependency]));
        }
      }
    });

    // 生成依赖关系图
    const dependencyGraph = this.modules.reduce(
      (graph, item) => ({
        ...graph,
        [item.filename]: {
          dependecies: item.dependecies,
          code: item.code,
        },
      }),
      {}
    );
    this.generate(dependencyGraph);
  }

  build(filename) {
    const { getAst, getDependecies, getCode } = Parser;
    const ast = getAst(filename);
    const dependecies = getDependecies(ast, filename);
    const code = getCode(ast);
    return {
      filename,
      dependecies,
      code,
    };
  }

  //  重写 require函数 (浏览器不能识别commonjs语法),输出bundle
  generate(code) {
    const filePath = path.join(this.output.path, this.output.filename);

    const bundle = `(function(graph){
          function require(module){
              function localRequire(relativePath){
                  return require(graph[module].dependecies[relativePath])
              }
              var exports={};
              (function(require,exporrts,code){
                  eval(code)
              })(localRequire,exports,graph[module].code);
              return exports;
          }
          require('${this.entry}')
      })(${JSON.stringify(code)})`;
    fs.writeFileSync(filePath, bundle, "utf-8");
  }
}

// 解析器
const Parser = {
  getAst: (path) => {
    const content = fs.readFileSynce(path, "utf-8");
    return parser.parse(content, {
      sourceType: "module",
    });
  },

  // 遍历所有的import依赖,存入dependecies对象
  getDependecies: (ast, filename) => {
    const dependecies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const dirname = path.dirname(filename);
        const filepath = "./" + path.join(dirname, node.source.value);

        dependecies[node.source.value] = filepath;
      },
    });
    return dependecies;
  },

  // ast转换为code
  getCode: (ast) => {
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });
    return code;
  },
};

new Compiler(options).run();
