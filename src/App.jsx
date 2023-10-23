import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
