import { assert, expect } from "chai";
import { isRegExp } from "util";
import { Controller } from "../Controller";
import { Picture } from "../Picture";
import { User } from "../User";

describe("Unit Tests Controller.ts", function () {
  describe("Load source file: " + __dirname + "/../Controller.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Controller, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Controller correctly", function () {
      var new_controller = new Controller();
      expect(new_controller).to.be.a("Controller");
    });
  });

  describe("Add Picture", function () {
    var title = "Picture 1";
    var description = "Test Picture 1";
    var source = "Example/picture";
    var new_user = new User("Gabriel", "Castro", "test@gmail.com");
    var new_picture = new Picture(new_user, title, description, source);
    var no_source_picture = new Picture(new_user, title, description, "");

    it("Should add a new Picture", function () {
      var new_controller = new Controller();
      assert.ok(
        new_controller.addPicture(new_picture),
        "Picture added correctly"
      );
    });

    it("Should return true when added correctly", function () {
      var new_controller = new Controller();
      assert.isTrue(
        new_controller.addPicture(new_picture),
        "Returned true after adding"
      );
    });

    it("Should return false for a Picture with no source", function () {
      var new_controller = new Controller();
      assert.isFalse(
        new_controller.addPicture(no_source_picture),
        "Returned false with empty source"
      );
    });

    it("Should not add Pictures with no source", function () {
      var new_controller = new Controller();
      new_controller.addPicture(no_source_picture),
        assert.equal(new_controller.getPictureList().length, 0);
    });

    it("Should increase picture list size", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictureList().length, 1);
    });

    it("Shouldn't add the same Picture twice", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictureList().length, 1);
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictureList().length, 1);
    });

    it("Should return false when Picture is already added", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictureList().length, 1);
      assert.isFalse(new_controller.addPicture(new_picture));
    });
  });
});
