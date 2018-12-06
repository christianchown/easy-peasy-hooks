import { select } from "easy-peasy";
import { clearDoneTodos, saveTodo, todoSaved, toggleTodo } from "./actions";
import { ITodoValuesAndSelectors } from "./interfaces";

const todos = {
  items: [],
  toggleTodo,
  saveTodo,
  clearDoneTodos,
  todoSaved,
  lengthOfItems: select((state: ITodoValuesAndSelectors) => {
    return state.items.filter((todo) => !todo.done).length;
  }),
};

export default todos;
