import React from "react";
import heroImg from "../img/hero.jpg";

/* <img
            src={heroImg}
            alt="hero-cars"
            className="blur-sm max-w-full h-full "
          /> */

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div
          className=" flex justify-center blur-sm bg-cover bg-center h-80 w-full contrast-75 drop-shadow-xl -z-1"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <h1 className="w-auto text-center text-3xl font-bold underline  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-1 ">
          The most big data base for car!
        </h1>
      </div>
    </>
  );
};

export default Hero;
