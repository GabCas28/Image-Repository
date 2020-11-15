import { assert, expect } from "chai";
import { Controller } from "../Controller";

describe("Unit Tests Controller.ts", function () {

  describe("Load source file: " + __dirname + "/../Controller.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Controller, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Controller correctly", function () {
      var new_controller = new Controller();
      expect(new_controller).to.be.a('Controller');
    });
  });

});
