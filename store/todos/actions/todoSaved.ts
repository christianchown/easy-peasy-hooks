import { ITodo } from "../interfaces/ITodo";
import { ITodoValuesAndSelectors } from "../interfaces/ITodoValuesAndSelectors";
const todoSaved = (state: ITodoValuesAndSelectors, todo: ITodo) => {
  state.items.splice(0, 0, todo);
};

export default todoSaved;
