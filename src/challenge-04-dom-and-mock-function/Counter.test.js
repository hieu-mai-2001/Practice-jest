import { Counter } from "./Counter";

describe("Counter", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "app";
    document.body.appendChild(container);
    const counter = new Counter({ selector: "#app", value: 1 });
    counter.render();
  });
  it("should render the given value", () => {
    const valueElementDefault = container.querySelector(".js-value");

    expect(container.querySelector(".js-decrease-btn")).not.toBeNull();
    expect(container.querySelector(".js-increase-btn")).not.toBeNull();
    expect(valueElementDefault).not.toBeNull();
    expect(valueElementDefault.textContent).toBe("1");
  });

  it('when clicking the "▲" arrow button, should increase the value from 1 to 2', () => {
    const increaseButton = container.querySelector(".js-increase-btn");
    const valueElement = container.querySelector(".js-value");

    increaseButton.click();
    expect(valueElement.textContent).toBe("2");
  });

  it('when clicking the "▼" arrow button, should decrease the value from 3 to 2', () => {
    const decreaseButton = container.querySelector(".js-decrease-btn");
    const valueElement = container.querySelector(".js-value");

    decreaseButton.click();
    expect(valueElement.textContent).toBe("0");
  });

  afterEach(() => {
    document.body.removeChild(container);
  });
});
