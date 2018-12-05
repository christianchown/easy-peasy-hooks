import { Action, Effect, Select } from "easy-peasy";
import { IModel } from "../../model";
import { ITodo } from "./ITodo";
import { ITodoValuesAndSelectors } from "./ITodoValuesAndSelectors";
export interface ITodoActions {
  saveTodo: Effect<IModel, ITodo>;
  toggleTodo: Action<ITodoValuesAndSelectors, number>;
  todoSaved: Action<ITodoValuesAndSelectors, ITodo>;
  lengthOfItems: Select<ITodoValuesAndSelectors, number>;
}
