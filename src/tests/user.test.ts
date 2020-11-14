import { assert } from "chai";
import { User } from "../User";

describe("Unit Tests User.ts", function () {
  // Testea que se haya cargado bien la librería
  describe("Load source file: " + __dirname + "/../User.ts", function () {
    it("Should be loaded", function () {
      assert.ok(User, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Users correctly", function () {
      var new_user = new User(
        "Gabriel",
        "Castro",
        "g@gmail.com"
      );
      assert.equal(new_user.toString(), "Gabriel Castro - g@gmail.com");
    });
  });
});
