import React, { Fragment } from "react";
import { Route, withRouter } from "react-router";
import Counter from "./components/counter/Counter";
import Todos from "./components/todo/Todos";
export const Routes = withRouter(() => (
  <Fragment>
    <Route path="/counter" component={Counter} />
    <Route exact path="/" component={Todos} />
  </Fragment>
));
