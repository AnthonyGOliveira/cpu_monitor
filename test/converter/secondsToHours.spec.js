import secondsToHours from "../../converter/secondsToHours";

describe("secondsToHours function", () => {
  test("Should return value in hours", () => {
    const value = 15 * 60 * 60;
    const result = secondsToHours(value);
    const expectResult = 15;
    expect(result).toBe(expectResult);
  });
});
