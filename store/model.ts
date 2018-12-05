import { createStore, Reducer, reducer, Store } from "easy-peasy";

import counter from "./counter/counter.reducer";
import { routerMiddleware, routerReducer } from "./router/router";
import { ITodoActions } from "./todos/interfaces/ITodoActions";
import { ITodoValues } from "./todos/interfaces/ITodoValues";
import todos from "./todos/todo.model";

export interface IModel {
  todos: ITodoValues & ITodoActions;
  counter: Reducer<number>;
  router: Reducer<any>;
}

const store: Store<IModel> = createStore<IModel>(
  {
    router: reducer(routerReducer),
    todos,
    counter,
  },
  {
    middleware: [routerMiddleware],
  },
);

export default store;
