import { StoreProvider } from "easy-peasy";
import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { Router } from "react-router";
import { NavBar } from "./components/navbar/NavBar";
import history from "./history";
import { Routes } from "./Routes";
import store from "./store/model";

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router history={history}>
        <Fragment>
          <NavBar />
          <Routes />
        </Fragment>
      </Router>
    </StoreProvider>
  );
};

export default hot(module)(App);
