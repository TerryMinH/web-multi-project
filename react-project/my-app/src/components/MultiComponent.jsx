/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-03-17 16:31:37
 * @Description: file not
 */
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setCount(count+1);
    // }, 1000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [count]);
  return (
    <div>
      <div>Count:{count} </div>
    </div>
  );
};


export { ExampleComponent };
