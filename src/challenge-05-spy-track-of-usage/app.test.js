import * as service from "./service";
import * as app from "./app";
import Popup from "./Popup";

describe("doUpdateProduct", () => {
  const toast = jest.spyOn(Popup, "toast");
  const error = new Error("Product update failed");

  describe("when updating successfully", () => {
    it("should show a popup message", async () => {
      const updateProductMock = jest.spyOn(service, "updateProduct");
      updateProductMock.mockResolvedValue();
      await app.doUpdateProduct({ id: 123 });

      expect(toast).toHaveBeenCalledWith("The product is updated");

      updateProductMock.mockRestore();
    });
  });

  describe("when updating failed", () => {
    it("should show the error", async () => {
      const updateProductMock = jest.spyOn(service, "updateProduct");
      const showError = jest.spyOn(Popup, "showError");

      updateProductMock.mockRejectedValue(error);
      await app.doUpdateProduct({ id: 123 });

      expect(showError).toHaveBeenCalledWith(error.message);

      updateProductMock.mockRestore();
    });
  });
});
