import * as React from "react";
import { useStore } from "easy-peasy";
import { IModel } from "./store/model";

export default () => {
  const counter: number = useStore<IModel>(store => store.counter);
  return <div>{counter}</div>;
};
