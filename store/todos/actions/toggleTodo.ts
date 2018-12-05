import { ITodoValuesAndSelectors } from "../interfaces/ITodoValuesAndSelectors";
const toggleTodo = (state: ITodoValuesAndSelectors, index: number) => {
  const todo = state.items[index];
  todo.done = !todo.done;
  state.items.splice(index, 1, todo);
};

export default toggleTodo;
