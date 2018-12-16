import { Action } from "easy-peasy";
import { ITodoDeeperValues } from "./ITodoDeeperValues";
export interface ITodoDeeperActions {
  incrementDeeperValue: Action<ITodoDeeperValues>;
}
