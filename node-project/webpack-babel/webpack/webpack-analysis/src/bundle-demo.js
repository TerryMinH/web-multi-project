/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-20 08:04:46
 * @Description: file not
 */
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function parseModule(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  const ast = parser.parse(code, { sourceType: "module" });
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration({ node }) {
      const importPath = node.source.value;
      const absolutePath = path.resolve(path.dirname(filePath), importPath);
      dependencies.push(absolutePath);
    },
  });
console.log(dependencies);
  return {
    filePath,
    code,
    dependencies,
  };
}

function bundle(entry) {
  const modules = {};
  const entryModule = parseModule(entry);
  const queue = [entryModule];

  while (queue.length > 0) {
    const currentModule = queue.shift();
    modules[currentModule.filePath] = currentModule;

    currentModule.dependencies.forEach((dependency) => {
      if (!modules[dependency]) {
        const dependencyModule = parseModule(dependency);
        queue.push(dependencyModule);
      }
    });
  }

  let output = `(function(modules) {
        function require(filePath) {
            const module = { exports: {} };
            const fn = modules[filePath];
            fn(module, module.exports, require);
            return module.exports;
        }
        require('${entry}');
    })({`;

  for (const filePath in modules) {
    const module = modules[filePath];
    output += `'${filePath}': function(module, exports, require) {
            ${module.code}
        },`;
  }

  output = output.slice(0, -1) + "});";

  return output;
}

const entry = path.resolve(__dirname, "print.js");
// console.log('entry',entry);
const bundledCode = bundle(entry);
fs.writeFileSync("bundle.js", bundledCode);
