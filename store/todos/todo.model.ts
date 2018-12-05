import { select } from "easy-peasy";
import { saveTodo, todoSaved, toggleTodo } from "./actions";
import { ITodoValuesAndSelectors } from "./interfaces";

const todos = {
  items: [],
  toggleTodo,
  saveTodo,
  todoSaved,
  lengthOfItems: select<ITodoValuesAndSelectors>((state) => {
    return state.items.filter((todo) => !todo.done).length;
  }),
};

export default todos;
