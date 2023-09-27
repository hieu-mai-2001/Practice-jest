import * as helper from "./helper";
import RandomColor from "./RandomColor";

const updateHelperMock = jest.spyOn(helper, "getRandomInt");
const colors = ["red", "green", "blue"];

describe("newColor()", () => {
  it("should return a color", () => {
    const randomColor = new RandomColor();
    updateHelperMock.mockReturnValue(0);

    expect(randomColor.newColor()).toBe(colors[0]);

    updateHelperMock.mockRestore();
  });
});

describe('when calling "newColor()" multiple times', () => {
  it("should return different colors", () => {
    updateHelperMock.mockReturnValueOnce(0);

    const randomColor = new RandomColor();
    const firstColor = randomColor.newColor();
    const secondColor = randomColor.newColor();

    expect(secondColor).not.toBe(colors[0]);

    updateHelperMock.mockRestore();
  });
});
