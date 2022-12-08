import returnTotalUsage from "../../utils/returnTotalUsage";

describe("returnTotalUsage", () => {
  test("Should return total of usage cpu", () => {
    const cpuMock = [
        {
          times: {
            user: 10,
            sys: 20,
            idle: 35,
          },
        },
        {
          times: {
            user: 15,
            sys: 20,
            idle: 35,
          },
        },
      ];
    const result = returnTotalUsage(cpuMock);
    const expectResult = [30,35];
    expect(result).toEqual(expectResult);
  });
});
