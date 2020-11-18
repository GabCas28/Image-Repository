import { assert, expect } from "chai";
import { Id } from "../src/Id";

describe("Unit Tests Id.ts", function () {
  // Testea que se haya cargado bien la librería
  describe(`Load source file: ${__dirname}/../src/Id.ts`, function () {
    it("Should be loaded", function () {
      assert.ok(Id, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Id correctly", function () {
      var new_id = new Id();
      expect(new_id).to.be.an("Id", "The object is not an Id");
    });

    it("Should print Id correctly", function () {
      var new_id = new Id("12");
      assert.equal(
        new_id.toString(),
        "12",
        "The id printed is not as expected"
      );
    });

    it("Should generate a new Id when called without arguments", function () {
      var new_id = new Id();
      assert.notDeepEqual(new_id.valueOf(), "", "The id hasn't been generated");
    });

  });
});
