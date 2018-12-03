import * as React from "react";
import { useStore, useAction } from "easy-peasy";
import store, { IModel, ICounterActions } from "./store/model";

export default () => {
  const counter: number = useStore<IModel>(store => store.counter);
  const count: () => void = useAction<ICounterActions>(dispatch => () =>
    dispatch({ type: "INCREMENT" })
  );
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={count}>Count</button>
    </div>
  );
};
