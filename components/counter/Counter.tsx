import { Dispatch, ModelValues, useAction, useStore } from "easy-peasy";
import React from "react";
import store, { IModel } from "../../store/model";

import "../../main.scss";
import { CounterActions } from "../../store/counter/actions";

export default () => {
  const counter: number = useStore(
    (store: ModelValues<IModel>) => store.counter,
  );

  const count = () =>
    store.dispatch<CounterActions>({
      type: "INCREMENT",
    });

  // const count = useAction((dispatch: Dispatch<CounterActions>) => () =>
  //   dispatch(CounterActions.icrement()),
  // );

  return (
    <div>
      <h1>{counter}</h1>
      <button className="btn" onClick={count}>
        Count
      </button>
    </div>
  );
};
