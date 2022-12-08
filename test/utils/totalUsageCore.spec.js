import totalUsageCore from "../../utils/totalUsageCore";

describe('totalUsageCore function', () => {
    test('Should return total of time attributes less idle', () => {
        const timesMock = {
            user: 10,
            sys: 20,
            idle: 35
        };
        const expectResult = 30;
        const result = totalUsageCore(timesMock);
        expect(result).toBe(expectResult);
    });
});