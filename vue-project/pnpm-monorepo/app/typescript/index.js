"use strict";
exports.__esModule = true;
exports.FRUITS_LIST = exports.FRUITS_OBJECT = void 0;
exports.FRUITS_OBJECT = {
    apple: "苹果",
    banana: "香蕉",
    pear: "梨",
    2: '两个未知水果'
};
function mapObjectToArray(o) {
    var arr = [];
    for (var item in o) {
        arr.push({ label: o[item], value: item });
    }
    // Object.keys(o).forEach((item) => {
    //   arr.push({ label: o[item], value: item });
    // });
    return arr;
}
exports.FRUITS_LIST = mapObjectToArray(exports.FRUITS_OBJECT);
console.log(exports.FRUITS_LIST);
