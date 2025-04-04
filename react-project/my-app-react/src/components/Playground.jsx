/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-04 09:51:25
 * @Description: file not
 */
import React, { useState, useEffect } from "react";
import { createPortal, flushSync } from "react-dom";
import "./Playground.css";

const PlayGround = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const handleBtn = () => {
    setIsPrinting('terrymin')
  };
  return (
    <>
      <h1>是否打印：{isPrinting}</h1>
      <button onClick={handleBtn}>打印</button>
      <PlayChild value={isPrinting} />
    </>
  );
};

const PlayChild = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      <div>子组件：</div>
      <div>{props.value}</div>
    </div>
  );
};
export { PlayGround };
