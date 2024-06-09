/*
 * @Author: TerryMin
 * @Date: 2022-06-20 15:13:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-10-08 20:04:48
 * @Description: CommonJS输出是值的浅拷贝；
 */
const { age, setAge,setNumber, sexObj } = require("./lib-a.cjs")

console.log(age, sexObj)
setAge(20)
sexObj.name='李四'
setNumber(50)
// sexObj.numberList.max=50;
console.log(age, sexObj)
