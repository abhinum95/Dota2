import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const handleClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav>
      <Router>
        <span className="logo-container">
          <NavLink exact activeClassName="active" to="/">
            <img className="logo" src="dota2Logo.png" alt="DOTA2 Logo" />
          </NavLink>
        </span>
        <ul className={`menu-items ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/heroes"
              onClick={handleClick}
            >
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/players_data"
              onClick={handleClick}
            >
              Players Data
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/heroes_stats"
              onClick={handleClick}
            >
              Heroes Stats
            </NavLink>
          </li>
        </ul>
        <div
          id="menuToggle"
          className={navbarOpen ? "navbarOpen" : ""}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Router>
    </nav>
  );
};

export default Header;
