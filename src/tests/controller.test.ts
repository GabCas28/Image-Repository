import { assert, expect } from "chai";
import { listenerCount } from "process";
import { Controller } from "../Controller";
import { Picture } from "../Picture";
import { User } from "../User";

describe("Unit Tests Controller.ts", function () {
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

  describe("Load source file: " + __dirname + "/../Controller.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Controller, "Not loaded");
    });
  });

  describe("Create Controller Instance", function () {
    it("Should create Controller correctly", function () {
      var new_controller = new Controller();
      expect(new_controller).to.be.a("Controller");
    });
  });

  describe("Controller addPicture", function () {
    it("Should be callable", function () {
      var new_controller = new Controller();
      assert.ok(
        new_controller.addPicture(new_picture),
        "addPicture not called"
      );
    });

    it("Should return false for a Picture with no source", function () {
      var new_controller = new Controller();
      assert.isFalse(
        new_controller.addPicture(no_source_picture),
        "Didn't return false with empty source"
      );
    });

    it("Should not add Pictures with no source", function () {
      var new_controller = new Controller();
      new_controller.addPicture(no_source_picture),
        assert.equal(
          new_controller.getPictures().length,
          0,
          "The picture with no source is added"
        );
    });

    it("Should not add the same Picture twice", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictures().length, 1);
      new_controller.addPicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        1,
        "The picture was added twice"
      );
    });

    it("Should return false when Picture is already added", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictures().length, 1);
      assert.isFalse(
        new_controller.addPicture(new_picture),
        "The function didn't return false"
      );
    });

    it("Should return true when added correctly", function () {
      var new_controller = new Controller();
      assert.isTrue(
        new_controller.addPicture(new_picture),
        "Didn't return true after adding"
      );
    });

    it("Should increase picture list size", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        1,
        "The list size is not increased by one"
      );
    });

    it("Should include the picture in the list", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.isTrue(
        new_controller.getPictures().includes(new_picture),
        "The picture is not included in the list"
      );
    });
  });

  describe("Controller deletePicture", function () {
    it("Should be callable", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.ok(
        new_controller.deletePicture(new_picture),
        "Function not called"
      );
    });

    it("Should return true if successful", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.isTrue(
        new_controller.deletePicture(new_picture),
        "Function doesn't return true when successful"
      );
    });
    it("Should return false if Picture not found", function () {
      var new_controller = new Controller();
      assert.isFalse(
        new_controller.deletePicture(new_picture),
        "Function doesn't return false when unsuccessful"
      );
    });
    it("Add one picture and delete it. Size should be zero", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.deletePicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        0,
        "Function doesn't reduce list size to zero"
      );
    });
    it("Add two pictures and delete one. Size should be one", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      new_controller.deletePicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        1,
        "Function does not reduce list size to one"
      );
    });
  });

  describe("Controller getPictures", function () {
    var new_picture = new Picture(new_user, title, description, source);
    it("With no pictures, should list an empty list", function () {
      var new_controller = new Controller();
      assert.deepEqual(
        new_controller.getPictures(),
        [],
        "No Empty list returned"
      );
    });

    it("With one picture, should return a list with that picture", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.deepEqual(
        new_controller.getPictures(),
        [new_picture],
        "No list with single element returned"
      );
    });

    it("With two pictures, should return a list with both pictures", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      assert.deepEqual(
        new_controller.getPictures(),
        [new_picture2, new_picture],
        "No list with both elements returned"
      );
    });

    it("Adding two pictures, and removing the first should return a list with the second picture", function () {
      var new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      new_controller.deletePicture(new_picture);
      assert.deepEqual(
        new_controller.getPictures(),
        [new_picture2],
        "No list with both elements returned"
      );
    });
    it("Adding two pictures, and removing them return a empty list", function () {
        var new_controller = new Controller();
        new_controller.addPicture(new_picture);
        new_controller.addPicture(new_picture2);
        new_controller.deletePicture(new_picture);
        new_controller.deletePicture(new_picture2);
        assert.deepEqual(
          new_controller.getPictures(),
          [],
          "No list with both elements returned"
        );
      });
  });
});
