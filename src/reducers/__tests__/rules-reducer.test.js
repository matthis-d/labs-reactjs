import { rulesReducer } from "../rules-reducer";

describe("rules reducer", () => {
  it("should return an initial state", () => {
    expect(rulesReducer(undefined, {})).toEqual([]);
  });

  it("should return previous when action is unknown", () => {
    const previousState = [{ id: 1 }];
    const action = { type: "UNKNOWN" };

    expect(rulesReducer(previousState, action)).toEqual(previousState);
  });

  it("should handle RULES_LOADED action type", () => {
    const rules = [{ id: 1 }, { id: 2 }];
    const action = { type: "RULES_LOADED", payload: rules };

    expect(rulesReducer([{ id: 3 }], action)).toEqual(rules);
  });

  it("should handle DO_LIKE", () => {
    const previousState = [
      { id: 1, likes: 12 },
      { id: 2, likes: 22 },
      { id: 3, likes: 32 },
    ];

    const action = {
      type: "DO_LIKE",
      payload: { id: 2, likes: 23 },
    };

    expect(rulesReducer(previousState, action)).toEqual([
      { id: 1, likes: 12 },
      { id: 2, likes: 23 },
      { id: 3, likes: 32 },
    ]);
    expect(previousState).toEqual([
      { id: 1, likes: 12 },
      { id: 2, likes: 22 },
      { id: 3, likes: 32 },
    ]);
  });

  it("should handle DO_DISLIKE", () => {
    const previousState = [
      { id: 1, dislikes: 12 },
      { id: 2, dislikes: 22 },
      { id: 3, dislikes: 32 },
    ];

    const action = {
      type: "DO_DISLIKE",
      payload: { id: 2, dislikes: 23 },
    };

    expect(rulesReducer(previousState, action)).toEqual([
      { id: 1, dislikes: 12 },
      { id: 2, dislikes: 23 },
      { id: 3, dislikes: 32 },
    ]);
  });
});
