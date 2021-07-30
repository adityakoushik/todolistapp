import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let todosContainerStyle = {
    minHeight: "70vh",
    margin: "50px auto"
  };
  return (
    <div className="container" style={todosContainerStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {/* Below code is a if condition with for loop */}
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
                <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr />
                </>
            );
          })}
    </div>
  );
};
