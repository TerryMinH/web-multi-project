/*
 * @Author: TerryMin
 * @Date: 2024-09-19 16:58:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-09-19 17:40:33
 * @Description: file not
 */
import React, { useState, useEffect } from "react";
import MyButton from "./MyButton";

const user = {
  name: "Hedy Lamarrs",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }
  
  const Cardinal = () => {
    return <div>基数</div>;
  };

  return (
    <>
      <div className="profile">
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </div>
      <div>
        {count % 2 === 0 ? <div className="">偶数</div> : <Cardinal></Cardinal>}
      </div>
      <div className="button-list">
        <MyButton count={count} onClick={handleClick} />
      </div>
    </>
  );
}
