import { selectCounterValue } from "./selectCounterValue";

describe("testing selector", () => {
  test("counter selector", () => {
    expect(selectCounterValue({})).toBe(0);
  });
});
