import * as helper from "./helper";
import RandomColor from "./RandomColor";

const colors = {
  red: 0,
  green: 1,
  blue: 2,
};

describe("newColor()", () => {
  it("should return a color", () => {
    const updateHelperMock = jest.spyOn(helper, "getRandomInt");
    const randomColor = new RandomColor();
    updateHelperMock.mockReturnValueOnce(colors["red"]);

    expect(randomColor.newColor()).toBe("red");

    updateHelperMock.mockClear();
  });
});

describe('when calling "newColor()" multiple times', () => {
  it("should return different colors", () => {
    const updateHelperMock = jest.spyOn(helper, "getRandomInt");
    updateHelperMock.mockReturnValueOnce(colors["red"]);
    updateHelperMock.mockReturnValueOnce(colors["green"]);

    const randomColor = new RandomColor();
    const firstColor = randomColor.newColor();

    updateHelperMock.mockRestore();
    const secondColor = randomColor.newColor();

    expect(secondColor).not.toBe("red");

    updateHelperMock.mockClear();
  });
});
