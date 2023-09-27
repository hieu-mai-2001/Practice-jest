import * as service from "./service";
import * as app from "./app";
import Popup from "./Popup";

describe("doUpdateProduct", () => {
  const updateProductMock = jest.spyOn(service, "updateProduct");
  const toast = jest.spyOn(Popup, "toast");

  describe("when updating successfully", () => {
    it("should show a popup message", async () => {
      // TODO: implement test

      updateProductMock.mockResolvedValue();
      await app.doUpdateProduct({ id: 123 });

      expect(toast).toHaveBeenCalledWith("The product is updated");

    });
  });

  describe("when updating failed", () => {
    it("should show the error", async () => {
      // TODO: implement test
      // const updateProductMock = jest.spyOn(service, "updateProduct");
      const showError = jest.spyOn(Popup, "showError");
      const error = new Error("Product update failed");

      updateProductMock.mockRejectedValue(error);
      await app.doUpdateProduct({ id: 123 });

      expect(showError).toHaveBeenCalledWith(error.message);
    });
  });
});
