/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-20 16:09:57
 * @Description: file not
 */
import React, { useMemo, useState } from "react";

function Hoc(Component) {
  return function RenderWrapComponent(props) {
    const { num, num1 } = props;
    // const RenderElement = useMemo(() => <Component {...props} />, [num,num1]);
    const RenderElement = <Component {...props} />;
    return RenderElement;
  };
}
class Index extends React.Component {
  render() {
    console.log(`当前组件是否渲染`, this.props);
    return <div>hello,world, my name is alien </div>;
  }
}
const IndexHoc = Hoc(Index);

export default () => {
  const [num, setNumber] = useState(0);
  const [num1, setNumber1] = useState(0);
  const [num2, setNumber2] = useState(0);
  return (
    <div>
      <IndexHoc num={num} num1={num1} num2={num2} />
      <button onClick={() => setNumber(num + 1)}>num++</button>
      <button onClick={() => setNumber1(num1 + 1)}>num1++</button>
      <button onClick={() => setNumber2(num2 + 1)}>num2++</button>
    </div>
  );
};
