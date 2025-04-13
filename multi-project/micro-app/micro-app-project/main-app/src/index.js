/*
 * @Author: TerryMin
 * @Date: 2025-04-13 14:43:55
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 14:46:04
 * @Description: file not
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import microApp from '@micro-zoe/micro-app';

microApp.start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
