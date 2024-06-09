/*
 * @Author: TerryMin
 * @Date: 2022-06-20 15:10:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-12-28 10:06:08
 * @Description: file not
 */
let age=18;
let sexObj={
  name:'张三',
  sex:'boy',
  numberList:{
    max:20,
  }
}
exports.setAge=function setAge(val){
  age=val
};
exports.setNumber=function setNumber(val){
  sexObj.numberList.max=val
};

exports.age=age;
exports.sexObj=sexObj;
