import view from "../../view/view";
import colors from "../../view/colors";
jest.mock("chalk", () => {
  return {
    rgb: jest.fn((...values) => {
      return values;
    }),
  };
});
describe("view function", () => {
  const spyConsole = jest.spyOn(console, "log");
  test("Should return color green with string", () => {
    colors.green = jest.fn();
    const color = "green";
    const value = "Test string";
    view(color, value);
    expect(spyConsole).toHaveBeenCalled();
  });

  test("Should return just only string value", () => {
    colors.green = jest.fn();
    const color = "";
    const value = "Test string";
    view(color, value);
    expect(spyConsole).toHaveBeenCalledWith(value);
  });
});
