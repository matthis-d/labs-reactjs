import React from "react";
import PropTypes from "prop-types";

function LikeButton({ direction, initialCount, onClick }) {
  const title = direction === "up" ? "+1" : "-1";

  return (
    <button className="btn btn-default" title={title} onClick={onClick}>
      {initialCount}{" "}
      <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
    </button>
  );
}

LikeButton.propTypes = {
  initialCount: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down"]),
  onClick: PropTypes.func,
};

LikeButton.defaultProps = {
  initialCount: 0,
  direction: "up",
  onClick: () => {},
};

export default LikeButton;
