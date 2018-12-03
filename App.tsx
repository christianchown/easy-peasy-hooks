import * as React from "react";
import { StoreProvider } from "easy-peasy";
import store from "./store/model";
import Counter from "./Counter";

export default () => {
  return (
    <StoreProvider store={store}>
      <Counter />
    </StoreProvider>
  );
};
