import { useAction, useStore } from "easy-peasy";
import React, { Fragment } from "react";
import { IModel } from "../../store/model";
import { ITodo, ITodoValuesAndSelectors } from "../../store/todos/interfaces";

export const TodoList = () => {
  const toggleTodo = useAction<IModel, (index: number) => void>(
    (dispatch) => dispatch.todos.toggleTodo,
  );
  const todos = useStore<IModel, ITodo[]>((state) => state.todos.items);

  return (
    <Fragment>
      {todos.map(({ todo, done }, index) => (
        <p className="todo" key={index}>
          <input
            id={index.toString()}
            type="checkbox"
            checked={done}
            onChange={() => toggleTodo(index)}
          />
          <label
            htmlFor={index.toString()}
            style={done ? { textDecoration: "line-through" } : {}}
          >
            {todo}
          </label>
        </p>
      ))}
    </Fragment>
  );
};
