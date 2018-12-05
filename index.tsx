import React from "react";
import { render } from "react-dom";

import { AppContainer } from "react-hot-loader";
import App from "./App";

import { setConfig } from "react-hot-loader";

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
});

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root"),
);
