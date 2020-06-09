import { connect } from "react-redux";
import RuleList from "./RuleList";
import { loadRules } from "./actions/rules-actions";

const mapStateToProps = (state) => {
  return {
    rules: state.rules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRules: () => {
      dispatch(loadRules());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleList);
