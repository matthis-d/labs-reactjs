// To mock a server
import nock from "nock";

import { rulesLoaded, loadRules } from "../rules-actions";

describe("rules actions", () => {
  describe("rulesLoaded", () => {
    it("should return an object with type RULES_LOADED", () => {
      expect(rulesLoaded([])).toHaveProperty("type", "RULES_LOADED");
    });

    it("should return an object with a payload of type", () => {
      expect(rulesLoaded([{ id: 42 }])).toHaveProperty(
        "payload",
        expect.any(Array)
      );
    });
  });

  // Test a thunk
  describe("loadRules", () => {
    let dispatch;

    beforeEach(() => {
      // We simulate the server behaviour
      nock("http://localhost")
        .get("/rest/rules")
        .reply(200, [{ id: 1 }, { id: 2 }]);

      // We mock dispatch to verify it is called with right action
      dispatch = jest.fn();
    });

    it("should call dispatch with retrieved data in the payload", async () => {
      // We wait for the action to be finished and "dispatched"
      await loadRules()(dispatch);

      // And we check the dispatch was called with correct action
      expect(dispatch).toHaveBeenCalledWith({
        type: "RULES_LOADED",
        payload: [{ id: 1 }, { id: 2 }],
      });
    });
  });
});
