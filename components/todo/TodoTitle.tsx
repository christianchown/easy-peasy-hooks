import { ModelValues, useStore } from "easy-peasy";
import React from "react";
import { IModel } from "../../store/model";
import { ITodo } from "../../store/todos/interfaces";
export const TodoTitle = () => {
  const todos = useStore((state: ModelValues<IModel>) => state.todos.items);
  const title = titleCalculator(todos);
  return <div className="todo-count">{title}</div>;
};

const titleCalculator = (todos: ITodo[]) => {
  const lengthOfItems = todos.length;

  if (lengthOfItems === 0) {
    return "Please, Do something!";
  }

  if (todos.filter((t) => t.done).length === todos.length) {
    return "All done. Congragulations Buddy!";
  }

  const lengthOfUndoneItems = todos.filter((t) => !t.done).length;

  return `You ${
    lengthOfUndoneItems < 3 ? "only" : ""
  } have ${lengthOfUndoneItems} item
    ${lengthOfUndoneItems > 1 && "s"} left.`;
};
