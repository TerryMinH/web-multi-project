/*
 * @Author: TerryMin
 * @Date: 2025-03-29 10:21:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-08 20:31:55
 * @Description: file not
 */
import React, { createContext, useContext, useReducer } from "react";

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
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </CounterContext.Provider>
  );
};

const CounterComponent = () => {
  const { dispatch, state } = useContext(CounterContext);
  return (
    <>
      <div>Count:{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </>
  );
};
export { CounterProvider, CounterComponent };
