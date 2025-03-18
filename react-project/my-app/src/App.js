/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:52:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-17 16:30:39
 * @Description: file not
 */
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { ExampleComponent } from "./components/MultiComponent";
import { ClassComponent } from "./components/ClassComponent";
import IndexBase, { Counter, CounterClick } from "./components/MyReducer";
import HocComponent from "./components/HocComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <div className="multi-component">
        <ExampleComponent />
      </div>
    </div>
  );
}

export default App;
