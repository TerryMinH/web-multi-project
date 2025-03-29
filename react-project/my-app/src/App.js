/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:52:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-29 10:41:44
 * @Description: file not
 */
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { ExampleComponent } from "./components/MultiComponent";
import { Playground,PlayEvent } from "./components/Playground";
import IndexBase, { Counter, CounterClick } from "./components/MyReducer";
import HocComponent from "./components/HocComponent";

function App() {
  return (
    <div className="App">
      <div className="component-wrap">
        <h3>Playground:</h3>
        <Playground />
      </div>
      <div className="component-wrap">
        <h3>PlayEvent:</h3>
        <PlayEvent />
      </div>
    </div>
  );
}

export default App;
