import { ITodoDeeperValues } from "./ITodoDeeperValues";

export interface ITodoDeepValues {
  deepValue: number;
  deeper: ITodoDeeperValues;
}
