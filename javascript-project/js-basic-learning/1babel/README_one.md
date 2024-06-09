<!--
 * @Author: TerryMin
 * @Date: 2023-01-10 13:49:36
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-01-10 13:51:27
 * @Description: file not
-->

## ES

1. Promise:

- Promise.all: 当所有 promise 都 fullfiled 返回成功，否则返回失败 catch [Promise.all 与 Promise.settled](https://cloud.tencent.com/developer/article/1730975)
- Promise.allSettle:当所有 promise 状态改变，就返回一个数组，永远不会失败
- Promise.race: 返回状态最新改变的 promise [Promise.race 与 Promise.any](https://www.php.cn/js-tutorial-466802.html)
- Promise.any:只要一个 promise fullfiled 就返回成功，否则返回失败 catch。 与 Promise.all() 刚好相反
