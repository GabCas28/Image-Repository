import { assert, expect } from "chai";
import { Controller } from "../Controller";
import { Picture } from "../Picture";
import { User } from "../User";

describe("Unit Tests Controller.ts", function () {
  describe("Load source file: " + __dirname + "/../Controller.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Controller, "Loaded");
    });
  });

  describe("Create Controller Instance", function () {
    it("Should create Controller correctly", function () {
      var new_controller = new Controller();
      expect(new_controller).to.be.a("Controller");
    });
  });

  describe("Controller addPicture", function () {
    var title = "Picture 1";
    var description = "Test Picture 1";
    var source = "Example/picture";
    var new_user = new User("Gabriel", "Castro", "test@gmail.com");
    var new_picture = new Picture(new_user, title, description, source);
    var no_source_picture = new Picture(new_user, title, description, "");

    it("Should be callable", function () {
      var new_controller = new Controller();
      assert.ok(
        new_controller.addPicture(new_picture),
        "addPicture called correctly"
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
        assert.equal(
          new_controller.getPictureList().length,
          0,
          "The picture with no source is not added"
        );
    });

    it("Should not add the same Picture twice", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictureList().length, 1);
      new_controller.addPicture(new_picture);
      assert.equal(
        new_controller.getPictureList().length,
        1,
        "The picture wasn't added twice"
      );
    });

    it("Should return false when Picture is already added", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictureList().length, 1);
      assert.isFalse(
        new_controller.addPicture(new_picture),
        "The function returned false"
      );
    });

    it("Should return true when added correctly", function () {
      var new_controller = new Controller();
      assert.isTrue(
        new_controller.addPicture(new_picture),
        "Returned true after adding"
      );
    });

    it("Should increase picture list size", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(
        new_controller.getPictureList().length,
        1,
        "The list size is increased by one"
      );
    });

    it("Should include the picture in the list", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.isTrue(
        new_controller.getPictureList().includes(new_picture),
        "The picture is included in the list"
      );
    });
  });

  describe("Controller deletePicture", function () {
    var title = "Picture 1";
    var title2 = "Picture 2";
    var description = "Test Picture 1";
    var description2 = "Test Picture 2";
    var source = "Example/picture";
    var source2 = "Example/picture2";
    var new_user = new User("Gabriel", "Castro", "test@gmail.com");
    var new_picture = new Picture(new_user, title, description, source);
    var new_picture2 = new Picture(new_user, title2, description2, source2);
    var no_source_picture = new Picture(new_user, title, description, "");

    it("Should be callable", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.ok(new_controller.deletePicture(new_picture), "Function called");
    });

    it("Should return true if successful", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.isTrue(
        new_controller.deletePicture(new_picture),
        "Function returns true when successful"
      );
    });
    it("Should return false if Picture not found", function () {
      var new_controller = new Controller();
      assert.isFalse(
        new_controller.deletePicture(new_picture),
        "Function returns false when unsuccessful"
      );
    });
    it("Add one picture and delete it. Size should be zero", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.deletePicture(new_picture);
      assert.equal(
        new_controller.getPictureList().length,
        0,
        "Function reduces list size to zero"
      );
    });
    it("Add two pictures and delete one. Size should be one", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      new_controller.deletePicture(new_picture);
      assert.equal(
        new_controller.getPictureList().length,
        1,
        "Function reduces list size to one"
      );
    });
  });
});
