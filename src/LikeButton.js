import React, { useState } from "react";
import PropTypes from "prop-types";

function LikeButton({ direction, initialCount }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const title = direction === "up" ? "+1" : "-1";

  return (
    <button className="btn btn-default" title={title} onClick={increment}>
      {count} <i className={`glyphicon glyphicon-thumbs-${direction}`}></i>
    </button>
  );
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
