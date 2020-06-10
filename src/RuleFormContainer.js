import { connect } from "react-redux";
import RuleForm from "./RuleForm";
import { loadRule } from "./actions/rules-actions";

const mapStateToProps = (state, props) => {
  return {
    rule:
      state.rules.find(
        (rule) => rule.id === parseInt(props.match.params.id, 10)
      ) || {},
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchRule: () => {
      const { id } = props.match.params;
      if (id) {
        dispatch(loadRule(id));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleForm);
