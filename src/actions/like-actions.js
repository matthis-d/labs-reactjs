export const DO_LIKE = "DO_LIKE";
export const DO_DISLIKE = "DO_DISLIKE";

export function doLike(ruleId) {
  return {
    type: DO_LIKE,
    payload: ruleId,
  };
}

export function doDislike(ruleId) {
  return {
    type: DO_DISLIKE,
    payload: ruleId,
  };
}
