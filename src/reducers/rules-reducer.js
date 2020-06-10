import { RULES_LOADED, RULE_LOADED } from "../actions/rules-actions";
import { DO_LIKE, DO_DISLIKE } from "../actions/like-actions";

export function rulesReducer(currentRules = [], action) {
  switch (action.type) {
    case RULES_LOADED:
      return action.payload;

    case RULE_LOADED:
      return currentRules
        .filter((rule) => rule.id !== action.payload.id)
        .concat(action.payload);

    case DO_LIKE:
    case DO_DISLIKE: {
      return currentRules.map((rule) => {
        if (rule.id === action.payload.id) {
          return {
            ...rule,
            ...action.payload,
          };
        }
        return rule;
      });
    }

    default:
      return currentRules;
  }
}
