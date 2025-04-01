/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-17 14:54:51
 * @Description: file not
 */
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCount() {
    // console.log(99, this);
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.handleCount()}>增加计数</button>
        <div>类组件Component:{count}</div>
      </div>
    );
  }
}
export { ClassComponent };
