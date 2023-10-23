import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "normalize.css"; // Note this

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="react-car-rent">
    <App />
  </BrowserRouter>
);
