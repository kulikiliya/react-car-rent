import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "normalize.css"; // Note this
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ContextProvider } from "./components/context/contextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="react-car-rent">
    <Provider store={store}>
      <ContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ContextProvider>
    </Provider>
  </BrowserRouter>
);
