/*
 * @Author: TerryMin
 * @Date: 2022-09-21 14:05:04
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-12 19:01:12
 * @Description: file not
 */
const handleReplace = (str) => {
  return str.replace(/(^\s+)|(\s+$)/g, function (rs, $1, $2, offset, source) {
    console.log(rs, $1, $2,);
    //arguments中的每个元素对应一个参数
    // console.log(arguments);
    return 3;
  });
};
handleReplace(" abcd ")
// console.log();

String.prototype.trim = function () {
  /**
   * @param rs：匹配结果
   * @param $1:第1个()提取结果
   * @param $2:第2个()提取结果
   * @param offset:匹配开始位置
   * @param source：原始字符串
   */
  return this.replace(/(^\s+)|(\s+$)/g, function (rs, $1, $2, offset, source) {
    //arguments中的每个元素对应一个参数
    // console.log(arguments);
    return 1;
  });
};

// console.log(" abcd ".trim());
