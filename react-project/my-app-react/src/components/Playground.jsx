/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-01 08:05:15
 * @Description: file not
 */
import React, { Component } from "react";

class Playground extends React.Component{

  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
  }
  componentDidMount() {
    // console.log("React componentDidMount！");
    // this.parentRef.current?.addEventListener("click", (e) => {
    //   // e.stopPropagation()
    //   console.log("原生事件：父元素 DOM 事件监听！");
    // });
    // this.childRef.current?.addEventListener("click", (e) => {
    //   // e.stopPropagation()
    //   console.log("原生事件：子元素 DOM 事件监听！");
    // });
    // document.addEventListener("click", (e) => {
    //   console.log("原生事件：document DOM 事件监听！");
    // });
  }
  parentClickFun = () => {
    console.log("React 事件：父元素事件监听！");
  };
  childClickFun = (e) => {
    e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    console.log("React 事件：子元素事件监听！");
  };
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentClickFun}>
        <div ref={this.childRef} onClick={this.childClickFun}>
          分析事件执行顺序
        </div>
      </div>
    );
  }
}

class PlayEvent extends React.Component {
  handleNativeClick = (e) => {
      // 阻止原生事件冒泡
      e.stopPropagation(); 
      console.log('父元素原生事件触发');
  };

  handleSyntheticClick = () => {
      console.log('按钮合成事件触发');
  };

  render() {
      return (
          <div onClickCapture={this.handleNativeClick}>
              <button onClick={this.handleSyntheticClick}>
                  点击我
              </button>
          </div>
      );
  }
}

export { Playground,PlayEvent };
