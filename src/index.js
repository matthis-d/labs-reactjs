import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

import { store } from "./app-store";
import RuleListContainer from "./RuleListContainer";

ReactDOM.render(
  <Provider store={store}>
    <RuleListContainer />
  </Provider>,
  document.getElementById("root")
);
