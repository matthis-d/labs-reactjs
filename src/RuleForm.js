import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RuleTitleField from "./RuleTitleField";

const initialRule = {
  title: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("A title is required")
    .max(50, "It should not contain more than 50 characters"),
  description: Yup.string()
    .min(5, "It should be at least 5 characters")
    .max(100, "It should be 100 characters max"),
});

function RuleForm() {
  const { id } = useParams();
  const history = useHistory();

  const [rule, setRule] = useState(initialRule);
  useEffect(() => {
    if (id) {
      fetch(`/rest/rules/${id}`)
        .then((res) => res.json())
        .then((data) => setRule(data));
    } else {
      setRule(initialRule);
    }
  }, [id]);

  const handleSubmit = (values) => {
    const method = id ? "PUT" : "POST";
    const url = id ? `/rest/rules/${id}` : "/rest/rules";
    return fetch(url, {
      method,
      body: JSON.stringify(values),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">{rule.id ? "Edit rule" : "New rule"}</h3>
      </div>
      <div className="panel-body">
        <Formik
          initialValues={rule}
          enableReinitialize
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <RuleTitleField name="title" />
              <div className="form-group">
                <label htmlFor="rule-desc">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="form-control"
                  id="rule-desc"
                  placeholder="Description"
                />
              </div>
              <button type="submit" className="btn btn-primary pull-right">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RuleForm;
