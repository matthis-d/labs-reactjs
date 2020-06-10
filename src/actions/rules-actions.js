export const RULES_LOADED = "RULES_LOADED";

// This is a thunk: a function that returns a function (with dispatch as an argument)
export function loadRules() {
  return function (dispatch) {
    fetch("/rest/rules")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: RULES_LOADED,
          payload: data,
        });
      });
  };
}
