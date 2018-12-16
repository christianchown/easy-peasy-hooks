import { Action, Effect, Select } from "easy-peasy";
import { IModel } from "../../model";
import { ITodo } from "./ITodo";
import { ITodoValuesAndSelectors } from "./ITodoValuesAndSelectors";
import { ITodoDeepActions } from "./ITodoDeepActions";
export interface ITodoActions {
  saveTodo: Effect<IModel, ITodo>;
  clearDoneTodos: Action<ITodoValuesAndSelectors>;
  toggleTodo: Action<ITodoValuesAndSelectors, number>;
  todoSaved: Action<ITodoValuesAndSelectors, ITodo>;
  lengthOfItems: Select<ITodoValuesAndSelectors, number>;
  deep: ITodoDeepActions;
}
