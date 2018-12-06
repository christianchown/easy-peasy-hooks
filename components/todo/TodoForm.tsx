import { Dispatch, useAction } from "easy-peasy";
import React from "react";
import { IModel } from "../../store/model";
import { ITodo } from "../../store/todos/interfaces";
export const TodoForm = () => {
  const [newTodo, setTodo] = React.useState("");

  const saveTodo = useAction(
    (dispatch: Dispatch<IModel>) => dispatch.todos.saveTodo,
  );

  const clearDone = useAction(
    (dispatch: Dispatch<IModel>) => dispatch.todos.clearDoneTodos,
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input onChange={(e) => setTodo(e.target.value)} value={newTodo} />
      <button
        className="btn"
        onClick={() => {
          if (newTodo !== "") {
            saveTodo({ done: false, todo: newTodo });
          }
          setTodo("");
        }}
      >
        Add Todo
      </button>
      <button id="clear" className="btn" onClick={() => clearDone()}>
        Clear Done
      </button>
    </form>
  );
};
