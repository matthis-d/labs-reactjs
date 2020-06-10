export const DO_LIKE = "DO_LIKE";
export const DO_DISLIKE = "DO_DISLIKE";

export function doLike(ruleId) {
  return function (dispatch) {
    return fetch(`/rest/rules/${ruleId}/likes`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DO_LIKE,
          payload: data,
        });
      });
  };
}

export function doDislike(ruleId) {
  return function (dispatch) {
    return fetch(`/rest/rules/${ruleId}/dislikes`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DO_DISLIKE,
          payload: data,
        });
      });
  };
}
