/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-10-01 17:49:20
 * @Description: file not
 */
import React from "react";

class MyChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    // 函数如果找不到调用者，最后就会在顶层对象中调用，也就是this会指向window对象，但由于使用了ES6语法，ES6语法默认采用严格模式，严格模式下，this不会指向window，而是undefined，所以才会报错。
    console.log(this); // 如果不绑定 this，这里的 this 可能是 undefined 或其他意外的值
    // this.setState({ count: this.state.count + 2 });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>MyChild</h1>
        <p>Count: {this.state.count}</p>
        {/* 虽然没有调用者，但由于使用了箭头函数，箭头函数内部的this就是定义时上层作用域的this，handleClick上层作用域是类的构造函数，那么handleClick的this就是构造函数的this，也就是指向Demo类的实例，所以能够正常执行 */}
        <button onClick={() => this.handleClick()}>class点击</button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default MyChild;
