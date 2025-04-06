/*
 * @Author: TerryMin
 * @Date: 2025-04-06 22:02:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-06 22:08:52
 * @Description: file not
 */
import React, { useState, useEffect, lazy, Suspense } from "react";

const PlaysGroundChild = (props) => {
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
export default PlaysGroundChild;
