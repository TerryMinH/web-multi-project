function Person(name) {
  this.name = name;
}

function Child(name, age) {
  Person.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;
let boy1 = new Child("小刚");
console.log(boy1);