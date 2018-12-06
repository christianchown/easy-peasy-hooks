import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";
export const NavBar = () => (
  <div className="navbar">
    <NavLink className="navlink" exact to="/">
      Todo
    </NavLink>
    <NavLink className="navlink" to="/counter">
      Counter
    </NavLink>
  </div>
);
