/*
 * @Author: TerryMin
 * @Date: 2022-06-11 14:41:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-11 10:12:03
 * @Description: file not
 */
const instance1 = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve("myPromise");
  }, 1000);
});
instance1
  .then((res) => {
    return new Promise((resolve, reject) => {
      resolve(`resolve1 ${res}`);
    });
  })
  .then((res2) => {
    console.log(res2);
  });
