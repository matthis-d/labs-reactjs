import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RuleForm() {
  const { id } = useParams();
  const [rule, setRule] = useState({});
  useEffect(() => {
    if (id) {
      fetch(`/rest/rules/${id}`)
        .then((res) => res.json())
        .then((data) => setRule(data));
    } else {
      setRule({});
    }
  }, [id]);

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{rule.title || "New rule"}</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label htmlFor="rule-title">Title</label>
            <input
              type="text"
              className="form-control"
              id="rule-title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rule-desc">Description</label>
            <textarea
              className="form-control"
              id="rule-desc"
              placeholder="Description"
            />
          </div>
          <button type="submit" className="btn btn-primary pull-right">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RuleForm;
