import React from "react";
import { NavLink } from "react-router-dom";

export const AppNavLink = () => {
  return (
    <div>
      <NavLink to="/product" className="nav-link">Product</NavLink>
      <NavLink to="/product/create" className="nav-link">Create Product</NavLink>
      <NavLink to="/user" className="nav-link">User</NavLink>
      <NavLink to="/user/create" className="nav-link">Create User</NavLink>
      <NavLink to="/school" className="nav-link">School</NavLink>
      <NavLink to="/school/create" className="nav-link">Create School</NavLink>
    </div>
  );
};

export default AppNavLink
