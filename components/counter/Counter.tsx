import { useAction, useStore } from "easy-peasy";
import React from "react";
import { IModel } from "../../store/model";

import "../../main.scss";
import { CounterActions } from "../../store/counter/actions";

export default () => {
  const counter: number = useStore<IModel>((store) => store.counter);
  const count: () => void = useAction<CounterActions>((dispatch) => () =>
    dispatch(CounterActions.icrement()),
  );

  return (
    <div>
      <h1>{counter}</h1>
      <button className="btn" onClick={count}>
        Count
      </button>
    </div>
  );
};
