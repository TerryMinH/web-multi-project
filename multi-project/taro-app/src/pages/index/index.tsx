/*
 * @Author: TerryMin
 * @Date: 2024-08-05 23:15:30
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-13 13:46:58
 * @Description: file not
 */
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Component } from "react";
import "./index.less";

type State = {
  contents: { text: string }[];
  contentsLen: number;
};
export default class App extends Component {
  state: State = {
    contents: [],
    contentsLen: 0,
  };

  add = () => {
    this.setState((prev: Pick<State, "contents">) => {
      console.log(prev);
      const cot = prev.contents.slice();
      cot.push({ text: "hello world" });
      return {
        contents: cot,
        contentsLen: cot.length,
      };
    });
  };

  remove = () => {
    this.setState((prev: Pick<State, "contents">) => {
      const cot = prev.contents.slice();
      cot.pop();
      return {
        contents: cot,
        contentsLen: cot.length,
      };
    });
  };

  render() {
    return (
      <View className="container">
        {this.state.contents.map((item, index) => (
          <View key={index}>{item.text}</View>
        ))}
        <Button className="btn-max-w button_style" plain type="default" onClick={this.add}>
          add line:{this.state.contentsLen}
        </Button>
        <Button className="btn-max-w button_style" plain type="default" disabled={this.state.contentsLen ? false : true} onClick={this.remove}>
          remove line
        </Button>
      </View>
    );
  }
}
