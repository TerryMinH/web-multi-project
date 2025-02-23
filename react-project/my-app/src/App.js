/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:52:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-22 10:34:41
 * @Description: file not
 */
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { ExampleComponent } from "./components/MultiComponent";
import IndexBase, { Counter, CounterClick } from "./components/MyReducer";
import HocComponent from "./components/HocComponent";

function App() {
  return (
    <div className="App">
      {/* <HocComponent />
      <Profile />
      <Counter />
      <CounterClick />
      <hr />
      <IndexBase /> */}
      <div className="multi-component">
        <ExampleComponent />
      </div>
    </div>
  );
}

export default App;
