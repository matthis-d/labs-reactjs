import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import data from "./data.json";

import RuleList from "./RuleList";

ReactDOM.render(<RuleList rules={data} />, document.getElementById("root"));
