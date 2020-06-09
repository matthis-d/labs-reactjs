import React from "react";
import PropTypes from "prop-types";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { direction } = this.props;

    const title = direction === "up" ? "+1" : "-1";

    return (
      <button
        className="btn btn-default"
        title={title}
        onClick={this.increment}
      >
        {count} <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
      </button>
    );
  }
}

LikeButton.propTypes = {
  initialCount: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down"]),
};

LikeButton.defaultProps = {
  initialCount: 0,
  direction: "up",
};

export default LikeButton;
