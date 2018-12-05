import { Fragment } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
export const NavBar = () => (
  <Fragment>
    <NavLink exact to="/">
      Todo
    </NavLink>
    <NavLink to="/counter">Counter</NavLink>
  </Fragment>
);
