import React from "react";
import Rule from "./Rule";

function RuleList({ rules }) {
  return (
    <div>
      {rules.map((rule) => (
        <Rule rule={rule} key={rule.id} />
      ))}
    </div>
  );
}

export default RuleList;
