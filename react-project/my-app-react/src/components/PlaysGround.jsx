/*
 * @Author: TerryMin
 * @Date: 2025-03-29 10:21:09
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-14 20:35:18
 * @Description: file not
 */
import './PlaysGround.css'
import React, { useState, useMemo, useReducer } from "react";

const createTodos = () => {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
};

const filterTodos = (todos, tab) => {
  console.log(
    "[ARTIFICIALLY SLOW] Filtering " +
      todos.length +
      ' todos for "' +
      tab +
      '" tab.'
  );
  let startTime = performance.now();
  while (performance.now() - startTime < 5000) {
    // 在 500 毫秒内不执行任何操作以模拟极慢的代码
  }

  return todos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
};
const todos = createTodos();

const TodoList = ({ todos, theme, tab }) => {
  console.log(todos, theme, tab);
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PlaysGround = () => {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </>
  );
};
export { PlaysGround };
