import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">MyApp</div>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <NavLink to="/product" className="nav-link" onClick={closeMenu}>
            Product
          </NavLink>
          <NavLink
            to="/product/create"
            className="nav-link"
            onClick={closeMenu}
          >
            Create Product
          </NavLink>
          <NavLink to="/user" className="nav-link" onClick={closeMenu}>
            User
          </NavLink>
          <NavLink to="/user/create" className="nav-link" onClick={closeMenu}>
            Create User
          </NavLink>
          <NavLink to="/school" className="nav-link" onClick={closeMenu}>
            School
          </NavLink>
          <NavLink to="/school/create" className="nav-link" onClick={closeMenu}>
            Create School
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
