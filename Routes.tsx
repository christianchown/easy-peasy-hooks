import React, { Fragment } from "react";
import { Route, withRouter } from "react-router";
import Counter from "./components/counter/Counter";
import InfoCard, { colors } from "./components/info-card/InfoCard";
import Todos from "./components/todo/Todos";
export const Routes = withRouter(() => (
  <Fragment>
    <Route path="/counter" component={Counter} />
    <Route exact path="/" component={Todos} />
    <Route
      path="/infocard"
      render={() => (
        <Fragment>
          <InfoCard
            value="123.123"
            unit="km"
            title="Katedilen Yol"
            iconName="road"
            color={colors.teal}
          />
          <InfoCard
            value="123.123"
            unit=""
            title="Günlük Rota"
            iconName="fork"
            color={colors.blue}
          />
          <InfoCard
            value="123.123"
            unit="kişi"
            title="Ulaşılan Nufus"
            iconName="users"
            color={colors.brown}
          />
        </Fragment>
      )}
    />
  </Fragment>
));
