import { arraySum, getPositiveNumbers } from "./functions";

describe('functions', () =>
{
  describe('arraySum', () => {
    it('should return 0 for an empty array', () => {
      // TODO: implement test
      expect(arraySum([])).toBe(0);
    });

    it('should return the sum of all the values in the array', () => {
      // TODO: implement test
      const sumNumber = 3 + 4;
      expect(arraySum([3,4])).toBe(sumNumber);
    });
  });

  describe('getPositiveNumbers', () => {
    it('should return positive numbers', () => {
      // TODO: implement test
      const arrNumber = [1, 2, -1, -2, 3, -4];
      const arrNumberPositive = [1, 2, 3];
      expect(getPositiveNumbers(arrNumber)).toEqual(arrNumberPositive);
    });

    it('should return empty array', () => {
      // TODO: implement test
      const arrNumber = [-1, -2, -3];
      const arrNumberPositive = [];
      expect(getPositiveNumbers(arrNumber)).toEqual(arrNumberPositive);
    });
  });
});
