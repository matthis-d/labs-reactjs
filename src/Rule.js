import React from "react";
import Tag from "./Tag";

function Rule({ rule }) {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading" role="presentation">
        {rule.title}
        <i className="pull-right glyphicon glyphicon-chevron-down"></i>
      </div>
      <div className="panel-body">
        <p>{rule.description}</p>
      </div>
      <div className="panel-footer">
        <div className="btn-toolbar">
          {rule.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
          <div className="btn-group btn-group-xs pull-right">
            <a className="btn btn-primary" title="Update" href="/">
              <i className="glyphicon glyphicon-pencil"></i>
            </a>
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <button className="btn btn-default" title="+1">
              {rule.likes} <i className="glyphicon glyphicon-thumbs-up"></i>
            </button>
            <button className="btn btn-default" title="-1">
              {rule.dislikes}{" "}
              <i className="glyphicon glyphicon-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rule;
