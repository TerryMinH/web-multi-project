
function testable(target) {
  target.isTestable = true;
}
console.log(MyTestableClass.isTestable);
@testable
class MyTestableClass {
  constructor() {
    this._myPrivateVariable = 42;
  }
}
