/*
 * @Author: TerryMin
 * @Date: 2022-01-21 17:09:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-21 17:43:41
 * @Description:
 */
var http = require('http');
var cheerio = require('cheerio');
http.get('http://tuijian.hao123.com/hotrank', function (res) {
  var data = '';
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function () {
    filter(data);
  })
});
function filter (data) {
  //保存搜索量前10的综艺节目标题
  var result = [];
  //将页面源代码转换为$对象
  var $ = cheerio.load(data);
  //查找每个综艺节目标题的外层div
  var temp_arr = $('[monkey = "zy"]').find('.point-bd').find('.point-title');
  //将综艺节目标题依次保存到结果数组中
  temp_arr.each(function (index, item) {
    result.push($(item).text());
  })
  //[ '变形计','来吧冠军','拜托了冰箱','昆仑决','天生是优我','姐姐好饿','脑力男人时代','奔跑吧兄弟','我想和你唱','玫瑰之旅' ]
  console.log(result);
}