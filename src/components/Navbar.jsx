import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="outline">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/main">Search for the car</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Your favorite cars!</NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Navbar;