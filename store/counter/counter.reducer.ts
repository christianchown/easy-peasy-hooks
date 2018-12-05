import { reducer } from "easy-peasy";
import { Action } from "redux";

const counter = reducer<number>((state = 0, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
});

export default counter;
