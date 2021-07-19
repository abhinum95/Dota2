import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/heroes">
        Heroes
      </NavLink>
      <NavLink exact activeClassName="active" to="/players_data">
        Players Data
      </NavLink>
      <NavLink exact activeClassName="active" to="/heroes_stats">
        Heroes Stats
      </NavLink>
    </nav>
  );
};

export default Header;
