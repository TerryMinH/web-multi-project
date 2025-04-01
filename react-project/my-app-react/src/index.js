/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:52:15
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-19 20:35:16
 * @Description: file not
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { HookComponent } from "./components/MultiComponent";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/HookComponent" element={<HookComponent />} />
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
