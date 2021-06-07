import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import AppRouter from "./AppRouter";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    {/* <Loader /> */}
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
