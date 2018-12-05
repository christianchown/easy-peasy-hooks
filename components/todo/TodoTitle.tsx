import { useStore } from "easy-peasy";
import React from "react";
import { IModel } from "../../store/model";
export const TodoTitle = () => {
  const lengthOfItems = useStore<IModel, number>(
    (state) => state.todos.lengthOfItems,
  );
  return lengthOfItems > 0 ? (
    <div className="todo-count">
      You only have {lengthOfItems} item
      {lengthOfItems > 1 && "s"} left.
    </div>
  ) : (
    <div className="todo-count">All done. Congragulations Buddy!</div>
  );
};
