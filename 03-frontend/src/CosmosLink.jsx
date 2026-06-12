import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CosmosLink = () => {
  let navigate = useNavigate();
  return (
    <div>
      <NavLink to="/about" className="navlink">
        About
      </NavLink>
      <NavLink to="/contact" className="navlink">
        Contact
      </NavLink>
      <NavLink to="/product" className="navlink">
        Product
      </NavLink>

      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default CosmosLink;
