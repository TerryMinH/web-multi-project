/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-01 08:04:59
 * @Description: file not
 */
import React from "react";

// 定义一个普通的函数组件
const MyComponent = (props) => {
  return <div>{props.message}</div>;
};

// 使用 React.memo 包装组件
const MemoizedComponent = React.memo(MyComponent);

// 在其他组件中使用包装后的组件
const MemoComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
      <div>
          <button onClick={() => setCount(count + 1)}>增加计数{count}</button>
          {/* 传递 props */}
          <MemoizedComponent message="Hello, React!" />
          {/* <MyComponent message="Hello, React!" /> */}
      </div>
  );
};
export { MemoComponent };
