import returnTotalIdle from "../../utils/returnTotalIdle";

describe("returnTotalIdle function", () => {
  test("Should return total of idle cpu", () => {
    const cpuInitialMock = [
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
    const cpuPostSecondMock = [
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
            idle: 40,
          },
        },
      ];
    const expectResult = [0, 5];
    const result = returnTotalIdle(cpuInitialMock, cpuPostSecondMock);
    expect(result).toEqual(expectResult);
  });
});
