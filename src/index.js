import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import createReduxStore from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
