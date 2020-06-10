import React from "react";
import classnames from "classnames";
import Tag from "./Tag";
import LikeButton from "./LikeButton";
import LikeButtonContainer from "./LikeButtonContainer";
import { Link } from "react-router-dom";

class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folded: !props.rule.description };
  }

  toggleDescription = () => {
    this.setState((prevState) => ({
      folded: !prevState.folded,
    }));
  };

  render() {
    const { rule } = this.props;
    const { folded } = this.state;

    return (
      <div className="panel panel-primary">
        <div
          className="panel-heading"
          role="presentation"
          onClick={this.toggleDescription}
        >
          {rule.title}
          <i
            className={classnames(
              "pull-right glyphicon",
              folded ? "glyphicon-chevron-up" : "glyphicon-chevron-down"
            )}
          ></i>
        </div>
        <div className={classnames("panel-body", { hidden: folded })}>
          <p>{rule.description}</p>
        </div>
        <div className="panel-footer">
          <div className="btn-toolbar">
            {rule.tags.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
            <div className="btn-group btn-group-xs pull-right">
              <Link
                className="btn btn-primary"
                title="Update"
                to={`/edit/${rule.id}`}
              >
                <i className="glyphicon glyphicon-pencil"></i>
              </Link>
            </div>
            <div className="btn-group btn-group-xs pull-right">
              <LikeButtonContainer id={rule.id} direction="up" />
              <LikeButtonContainer id={rule.id} direction="down" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rule;
