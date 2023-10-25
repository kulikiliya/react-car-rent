import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "normalize.css"; // Note this
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="react-car-rent">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
