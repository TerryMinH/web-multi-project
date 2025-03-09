/*
 * @Author: TerryMin
 * @Date: 2024-10-23 13:44:20
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-08 10:30:32
 * @Description: file not
 */
function object(o) {
  function F() {}
  //F.prototype={name:'ccdida',friends:['shelly','Bob']}
  F.prototype = o;
  // new F()
  //F是个构造函数，返回F的实例：1.this此时用不上 2.将实例的__proto__指向F.prototype.
  //即返回了一个实例，其__proto__指向{name:'ccdida',friends:['shelly','Bob']}
  return new F();
}
var person = {
  name: "ccdida",
  friends: ["shelly", "Bob"],
};
var person1 = object(person);
var person2 = object(person);
//object函数相当于实现了Object.Create的功能
// console.log(person1.__proto__ === person); //true
person2.friends.push("shlimy");
// console.log(person1); // ["shelly", "Bob", "shlimy"]

class Foo {
  // 静态方法
  static classMethod() {
    return "hello";
  }
  static classMethod1() {
    return "hello TerryMin";
  }
  say(){
    console.log(Foo.classMethod1());
  }
}
// Foo.classMethod(); // 'hello'
var foo = new Foo();
foo.say(); // TypeError: foo.classMethod is not a function

// // 静态属性
// Foo.prop = 1;
// Foo.prop; // 1