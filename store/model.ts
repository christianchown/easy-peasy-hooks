import {
  Action,
  createStore,
  effect,
  Effect,
  reducer,
  Reducer,
  select,
  Select,
  useAction
} from "easy-peasy";
import { Action as ReduxAction } from "redux";
export interface ITodoValues {
  items: string[];
}

interface ITodoValuesAndSelectors extends ITodoValues {
  lengthOfItems: number;
}

export interface ITodoActions {
  saveTodo: Effect<IModel, string>;
  todoSaved: Action<ITodoValuesAndSelectors, string>;
  lengthOfItems: Select<ITodoValuesAndSelectors, number>;
}

export interface IModel {
  todos: ITodoValues & ITodoActions;
  counter: Reducer<number>;
}

class TodoService {
  public save = (payload: string) =>
    new Promise<string>(resolve =>
      setTimeout(() => {
        resolve(payload);
      }, 2000)
    )
  /**
   * async reportBigUsage
   */
  public async reportBigUsage(): Promise<boolean> {
    return new Promise<boolean>(resolve => resolve(true));
  }
}

const todoService: TodoService = new TodoService();

// tslint:disable-next-line:typedef
const store = createStore<IModel>({
  todos: {
    items: [],
    saveTodo: effect(async (dispatch, payload, getState) => {
      // tslint:disable-next-line:typedef
      const saved = await todoService.save(payload);
      dispatch.todos.todoSaved(saved); // 👍 correctly typed

      // dispatch.todos.todoSaved(1);
      // 👍 errors! (1 is not assignable to string)

      // dispatch.notToDos.something();
      // 👍 errors! (notToDos does not exist on Dispatch<Model>)

      const { lengthOfItems } = getState().todos; // 👍 correctly typed
      if (lengthOfItems > 10) {
        await todoService.reportBigUsage();
      }
      return lengthOfItems;
    }),

    todoSaved: (state, payload) => {
      state.items.push(payload); // 👍 correctly typed

      // state.items.push(1);
      // 👍 correctly errors! (1 is not assignable to string)

      if (state.lengthOfItems > 10) {
        // 👍 correctly typed
      }
    },

    lengthOfItems: select(state => {
      return state.items.length; // 👍 correctly typed
    })
  },

  counter: reducer((state, action: ReduxAction) => {
    // 👍 correctly typed
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      default:
        return state;
    }
  })
});

export default store;
