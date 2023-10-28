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
      <div className="px-4 flex flex-col gap-0 h-screen items-center text-gray-600 body-font font-poppins">
        <Header />

        <div className="w-full p-6 flex flex-col items-center justify-between">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Main />}></Route>
            <Route path="/favorite" element={<Favorite />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
};
