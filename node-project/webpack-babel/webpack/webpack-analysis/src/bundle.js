(function(modules) {
        function require(filePath) {
            const module = { exports: {} };
            const fn = modules[filePath];
            fn(module, module.exports, require);
            return module.exports;
        }
        require('/Users/terrymin/Desktop/personal-project/my-project-demo/web-multi-project/node-project/webpack-babel/webpack/webpack-analysis/src/print.js');
    })({'/Users/terrymin/Desktop/personal-project/my-project-demo/web-multi-project/node-project/webpack-babel/webpack/webpack-analysis/src/print.js': function(module, exports, require) {
            /*
 * @Author: TerryMin
 * @Date: 2022-02-12 13:54:11
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-02-12 13:54:16
 * @Description: file not
 */
export default function printMe() {
  console.log('I get called from print.js!');
}
        }});