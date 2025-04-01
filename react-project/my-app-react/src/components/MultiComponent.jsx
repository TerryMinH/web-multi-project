/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-01 08:05:28
 * @Description: file not
 */
import React, { useState, useEffect } from "react";

const HookComponent = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setCount(count+1);
    // }, 1000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>Count:{count} </div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export { HookComponent };
