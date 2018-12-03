import * as React from "react";
import { useState } from "react";
import { StoreProvider } from "easy-peasy";
import store from "./store/model";
import Counter from "./Counter";

export default () => {
  const [count, setCount] = useState(0);
  return (
    <StoreProvider store={store}>
      <h1>
        <Counter />
      </h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </StoreProvider>
  );
};
