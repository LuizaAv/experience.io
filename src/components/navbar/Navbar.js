
import './navbar.css';

import {
  NavLink
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/login" >
          <div className="login">Login</div>
        </NavLink>
        <NavLink to="/register">
          <div className="register">Register</div>
        </NavLink>
        <NavLink to="/browseBootcamp">
          <div className="browsecamps">BrowseBootcamps</div>
        </NavLink>
    </nav>
  )
}

export default Navbar