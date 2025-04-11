/*
 * @Author: TerryMin
 * @Date: 2025-03-29 10:21:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-11 10:21:25
 * @Description: file not
 */
import React, { useState, useContext, useReducer } from "react";
import PlaysGroundChild from "./PlaysGroundChild";

const PlaysGround = () => {
  const [number, setNumber] = useState(0);
  const handleBtn = () => {
    setNumber(number + 5);
    setNumber((n) => n + 1);
    setNumber(42);
    setTimeout(() => {
      console.log(number);
    }, 1000);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleBtn}>增加数字</button>
    </>
  );
};
export { PlaysGround };
