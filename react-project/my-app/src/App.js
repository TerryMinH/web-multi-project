/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:52:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-20 15:34:46
 * @Description: file not
 */
// import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Profile from "./components/Profile";
import MyChild from "./components/MyChild";
import IndexBase, { Counter, CounterClick } from "./components/MyReducer";
import HocComponent from "./components/HocComponent";

function App() {
  return (
    <div className="App">
      <HocComponent />
      {/* <Profile /> */}
      {/* <MyChild />
      <Counter />
      <hr />
      <CounterClick />
      <hr /> */}
      {/* <IndexBase /> */}
    </div>
  );
}

export default App;
