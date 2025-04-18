/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:52:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-11 08:34:55
 * @Description: file not
 */
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { HookComponent } from "./components/MultiComponent";
import { ClassComponent } from "./components/ClassComponent";
import {  PlaysGround} from "./components/PlaysGround";
import { MemoComponent } from "./components/MemoComponent";
import IndexBase, { Counter, CounterClick } from "./components/MyReducer";
import HocComponent from "./components/HocComponent";

function App() {
  return (
    <div className="App">
      <div className="component-wrap">
        <h3>ClassComponent:</h3>
        <ClassComponent />
      </div>
      <div className="component-wrap">
        <h3>HookComponent:</h3>
        <HookComponent />
      </div>
      <div className="component-wrap">
        <h3>MemoComponent:</h3>
        <MemoComponent />
      </div>
      <div className="component-wrap">
        <h3>Playground:</h3>
        <PlaysGround />
      </div>
    </div>
  );
}

export default App;
