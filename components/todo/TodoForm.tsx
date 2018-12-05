import { useAction } from "easy-peasy";
import React from "react";
import { IModel } from "../../store/model";
import { ITodo } from "../../store/todos/interfaces";
export const TodoForm = () => {
  const [newTodo, setTodo] = React.useState("");

  const addTodo = useAction<IModel, (payload: ITodo) => void>(
    (dispatch) => dispatch.todos.saveTodo,
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input onChange={(e) => setTodo(e.target.value)} value={newTodo} />
      <button
        className="btn"
        onClick={() => {
          if (newTodo !== "") {
            addTodo({ done: false, todo: newTodo });
          }
          setTodo("");
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
