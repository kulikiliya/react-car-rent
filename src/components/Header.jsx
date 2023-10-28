import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { IconHome } from "../img/svg/logo";

const Header = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center	p-6 border-b">
      <p>
        <NavLink to="/">
          <IconHome />
        </NavLink>
      </p>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
