import React from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../redux/selectors";

const test = () => {
  const Fn = () => {
    const pageNumber = useSelector(selectPage);
    return pageNumber;
  };

  const myPage = Fn();

  return myPage;
};

export default test;
