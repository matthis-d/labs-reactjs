import { connect } from "react-redux";
import LikeButton from "./LikeButton";
import { doLike, doDislike } from "./actions/like-actions";

const mapStateToProps = (state, props) => {
  const currentRule = state.rules.find((rule) => rule.id === props.id);
  if (!currentRule) {
    return { initialCount: 0 };
  }

  const initialCount =
    props.direction === "up" ? currentRule.likes : currentRule.dislikes;

  return {
    initialCount,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      if (props.direction === "up") {
        dispatch(doLike(props.id));
      } else {
        dispatch(doDislike(props.id));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
