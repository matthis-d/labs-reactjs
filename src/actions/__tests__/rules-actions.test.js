import { loadRules } from "../rules-actions";

describe("rules actions", () => {
  describe("loadRules", () => {
    it("should return an object with type RULES_LOADED", () => {
      expect(loadRules()).toHaveProperty("type", "RULES_LOADED");
    });

    it("should return an object with a payload of type", () => {
      expect(loadRules()).toHaveProperty("payload", expect.any(Array));
    });
  });
});
