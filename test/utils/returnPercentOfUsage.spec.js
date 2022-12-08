import returnPercentOfUsage from "../../utils/returnPercentOfUsage";

describe("returnTotalIdle function", () => {
  test("Should return total of idle cpu", () => {
    const cpuInitialTotalMock = [20, 35];
    const cpuPostSecondTotalMock = [100, 80];
    const totalIdleMock = [80, 80];
    const expectResult = [
      Math.round(
        ((cpuPostSecondTotalMock[0] - cpuInitialTotalMock[0]) * 100) /
          totalIdleMock[0]
      ),
      Math.round(
        ((cpuPostSecondTotalMock[1] - cpuInitialTotalMock[1]) * 100) /
          totalIdleMock[1]
      ),
    ];
    const result = returnPercentOfUsage(
      cpuInitialTotalMock,
      cpuPostSecondTotalMock,
      totalIdleMock
    );
    expect(result).toEqual(expectResult);
  });
});
