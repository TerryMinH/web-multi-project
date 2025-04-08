/*
 * @Author: TerryMin
 * @Date: 2025-03-29 10:21:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-08 10:56:15
 * @Description: file not
 */
import React, { createContext, useContext, useReducer } from "react";

// 1. 创建一个 reducer 函数
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 2. 创建一个 Context 对象
const CounterContext = createContext();

// 3. 创建一个 Provider 组件，用于提供状态和 dispatch 函数
const CounterProvider = ({ children }) => {
  // 使用 useReducer 初始化状态
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// 4. 创建一个组件来使用共享状态
const CounterComponent = () => {
  // 使用 useContext 获取状态和 dispatch 函数
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
export { CounterProvider, CounterComponent };
