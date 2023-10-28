import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <ul className="flex items-center h-full gap-3">
          <li className="hover:text-blue-600 h-full">
            <NavLink to="/" className="flex items-center h-full">
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-600 h-full">
            <NavLink to="/catalog" className="flex items-center h-full">
              Search for the car
            </NavLink>
          </li>
          <li className="hover:text-blue-600 h-full">
            <NavLink to="/favorite" className="flex items-center h-full">
              Your favorite cars!
            </NavLink>
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
