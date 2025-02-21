/*
 * @Author: TerryMin
 * @Date: 2024-10-01 17:25:59
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-02-20 14:37:25
 * @Description: file not
 */
import React, { useReducer, useRef, useEffect, useState } from "react";

function reducer(state, action) {
  console.log(state, action);
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action");
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 23 });
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        incremented_age
      </button>
      <p>Hello! You are {state.age}</p>
    </>
  );
}

function CounterClick() {
  let ref = useRef(0);
  let count = 0;
  function handleClick() {
    ref.current = ref.current + 1;
    count = count + 1;
    console.log("You clicked " + ref.current + " times!" + count);
  }
  useEffect(()=>{
    console.log(22);
  })
  return <button onClick={handleClick}>点击</button>;
}

function HOC(Component) {
  return class wrapComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "alien",
      };
    }
    render() {
      return <Component {...this.props} {...this.state}></Component>;
    }
  };
}

@HOC
class HocIndex extends React.Component {
  say() {
    const { name } = this.props;
    console.log(name);
  }
  render() {
    return (
      <div>
        Hello,world <button onClick={this.say.bind(this)}>高阶组件点击</button>
      </div>
    );
  }
}

function classHOC(WrapComponent) {
  return class Idex extends React.Component {
    state = {
      name: "alien",
    };
    componentDidMount() {
      console.log("HOC");
    }
    changeName(name) {
      this.setState({ name });
    }
    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          changeName={this.changeName.bind(this)}
        />
      );
    }
  };
}
function IndexBase(props) {
  console.log(props);
  const [value, setValue] = useState(null);
  const { name, changeName } = props;
  useEffect(() => {
    console.log("index");
  }, []);
  return (
    <div>
      <div>hello,world , my name is {name}</div>
      改变name
      <input onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          changeName(value);
        }}
      >
        确定
      </button>
    </div>
  );
}

export default classHOC(IndexBase);

export { Counter, CounterClick, HocIndex };
