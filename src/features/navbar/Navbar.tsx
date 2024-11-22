import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          Mobin Afshari
        </NavLink>
      </div>
      <div className="navbar-links">
        <a href="#about-me" className="navbar-link">
          About Me
        </a>
        <NavLink to="/about" className="navbar-link">
          projects
        </NavLink>
        <NavLink to="/contact" className="navbar-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
