import bytesToGigabytes from "../../converter/bytesToGigabytes";

describe("bytesToGigabytes function", () => {
  test("Should return value og gigabytes", () => {
    const valueInBytes = 37.32 * 1024 * 1024 * 1024;
    const expectResult = 37.32;
    const result = bytesToGigabytes(valueInBytes);
    expect(result).toEqual(expectResult);
  });
});
