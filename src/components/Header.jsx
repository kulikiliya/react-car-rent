import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center	p-6 border-b">
      <p>Logo Place</p>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
