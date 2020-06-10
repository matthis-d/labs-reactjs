import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { store } from "./app-store";
import RuleListContainer from "./RuleListContainer";
import Layout from "./Layout";
import RuleForm from "./RuleForm";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Route path="/" exact component={RuleListContainer} />
        <Route path="/edit/:id?" component={RuleForm} />
      </Layout>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
