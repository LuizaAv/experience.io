import React from "react";
import './navbar.css';

import {
  NavLink
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img className="logo" />
        <NavLink to="/" class="links">
          <div className="devCamper">DevCamper</div>
        </NavLink>
        <NavLink to="/login" class="links" >
          <div className="login">Login</div>
        </NavLink>
        <NavLink to="/register" class="links">
          <div className="register">Register</div>
        </NavLink>
        <NavLink to="/browseBootcamp" class="links">
          <div className="browsecamps">Browse Bootcamps</div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar