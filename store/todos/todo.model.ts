import { select } from "easy-peasy";
import { clearDoneTodos, saveTodo, todoSaved, toggleTodo } from "./actions";
import {
  ITodoValuesAndSelectors,
  ITodoDeepValues,
  ITodoDeeperValues
} from "./interfaces";

const todos = {
  items: [],
  toggleTodo,
  saveTodo,
  clearDoneTodos,
  todoSaved,
  lengthOfItems: select((state: ITodoValuesAndSelectors) => {
    return state.items.filter((todo) => !todo.done).length;
  }),
  deep: {
    deepValue: 1,
    incrementDeepValue: (state: ITodoDeepValues) => {
      state.deepValue += 1;
    },
    deeper: {
      deeperValue: 1,
      incrementDeeperValue: (state: ITodoDeeperValues) => {
        state.deeperValue += 1;
      }
    }
  }
};

export default todos;
