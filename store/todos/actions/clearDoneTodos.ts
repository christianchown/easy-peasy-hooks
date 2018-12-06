import { ITodoValuesAndSelectors } from "../interfaces/ITodoValuesAndSelectors";

const clearDoneTodos = (state: ITodoValuesAndSelectors) => {
  state.items = state.items.filter((s) => !s.done);
};

export default clearDoneTodos;
