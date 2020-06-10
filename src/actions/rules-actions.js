export const RULES_LOADED = "RULES_LOADED";

export function rulesLoaded(data) {
  return {
    type: RULES_LOADED,
    payload: data,
  };
}

// This is a thunk: a function that returns a function (with dispatch as an argument)
export function loadRules() {
  return function (dispatch) {
    return fetch("/rest/rules")
      .then((res) => res.json())
      .then((data) => {
        dispatch(rulesLoaded(data));
      });
  };
}
