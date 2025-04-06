/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-06 22:22:49
 * @Description: file not
 */
import React, { useState, useEffect, useRef, Suspense } from "react";
import { createPortal, flushSync } from "react-dom";
import "./PlaysGround.css";

const PlaysGround = ({children}) => {
  const cacheRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "隐藏组件" : "显示组件"}
      </button>
    </div>
  );
};

export { PlaysGround };
