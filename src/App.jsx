import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const App = () => {
  return (
    <>
      <div className="w-full flex flex-col h-screen w-full items-center justify-between">
        <Header />
        <div className="h-screen w-full p-6 flex flex-col items-center justify-between">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};
