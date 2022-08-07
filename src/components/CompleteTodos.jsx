import React from "react";

export const CompleteTodos = (props) => {
  const { todos, back } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => back(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
