import React from "react";
import classnames from "classnames";
import { useField, Field } from "formik";

function RuleTitleField(props) {
  const [field, meta] = useField(props);

  return (
    <div className={classnames("form-group", { "has-error": meta.error })}>
      <label htmlFor="rule-title">Title</label>
      <Field
        {...field}
        className="form-control"
        id="rule-title"
        placeholder="Title"
      />
      {meta.error && <span className="help-block">{meta.error}</span>}
    </div>
  );
}

export default RuleTitleField;
