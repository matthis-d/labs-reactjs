import React, { useEffect } from "react";
import Rule from "./Rule";

function RuleList({ rules, fetchRules }) {
  useEffect(() => fetchRules(), [fetchRules]);

  return (
    <div>
      {rules.map((rule) => (
        <Rule rule={rule} key={rule.id} />
      ))}
    </div>
  );
}

export default RuleList;
