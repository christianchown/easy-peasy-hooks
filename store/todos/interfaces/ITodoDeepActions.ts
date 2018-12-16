import { Action } from "easy-peasy";
import { ITodoDeepValues } from "./ITodoDeepValues";
import { ITodoDeeperActions } from "./ITodoDeeperActions";
export interface ITodoDeepActions {
  incrementDeepValue: Action<ITodoDeepValues>;
  deeper: ITodoDeeperActions;
}
