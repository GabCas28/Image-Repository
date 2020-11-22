import { assert, expect } from "chai";
import { readFile } from "fs";
import { Controller } from "../src/Controller";
import { Id } from "../src/Id";
import { Picture } from "../src/Picture";
import { User } from "../src/User";

describe("Unit Tests Controller.ts", function () {
  let title = "Picture 1";
  let title2 = "Picture 2";
  let description = "Test Picture 1";
  let description2 = "Test Picture 2";
  let source = "assets/example/picture.png";
  let source2 = "assets/example22/picture2.png";
  let new_user = new User("Gabriel", "Castro", "test@gmail.com");
  let id = new Id();
  let id2 = new Id();
  let new_picture = new Picture(id, new_user, title, description, source);
  let new_picture2 = new Picture(id2, new_user, title2, description2, source2);
  let no_source_picture = new Picture(id, new_user, title, description, "");
  describe(`Load source file: ${__dirname}/../src/Controller.ts`, function () {
    it("Should be loaded", function () {
      assert.ok(Controller, "Not loaded");
    });
  });

  describe("Create Controller Instance", function () {
    it("Should create Controller correctly", function () {
      let new_controller = new Controller();
      expect(new_controller).to.be.a("Controller");
    });
  });

  describe("Controller addPicture", function () {
    it("Should be callable", function () {
      let new_controller = new Controller();
      assert.doesNotThrow(() => new_controller.addPicture(new_picture), Error);
    });

    it("Should throw error for a Picture with no source", function () {
      let new_controller = new Controller();
      assert.throw(
        () => new_controller.addPicture(no_source_picture),
        Error,
        "Picture can't be added"
      );
    });

    it("Should not add Pictures with no source", function () {
      let new_controller = new Controller();
      try {
        new_controller.addPicture(no_source_picture);
      } catch {}
      assert.equal(
        new_controller.getPictures().length,
        0,
        "The picture with no source is added"
      );
    });

    it("Should not add the same Picture twice", function () {
      let new_controller = new Controller();
      try {
        new_controller.addPicture(new_picture);
        assert.equal(new_controller.getPictures().length, 1);
        new_controller.addPicture(new_picture);
      } catch {}
      assert.equal(
        new_controller.getPictures().length,
        1,
        "The picture was added twice"
      );
    });

    it("Should throw error when Picture is already added", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(new_controller.getPictures().length, 1);
      assert.throw(
        () => new_controller.addPicture(new_picture),
        Error,
        "Picture can't be added"
      );
    });

    it("Should increase picture list size", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        1,
        "The list size is not increased by one"
      );
    });

    it("Should include the picture in the list", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.isTrue(
        new_controller.getPictures().includes(new_picture),
        "The picture is not included in the list"
      );
    });

    it("Should add two pictures", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      assert.equal(
        new_controller.getPictures().length,
        2,
        "The list size is not two"
      );
    });
  });

  describe("Controller deletePicture", function () {
    it("Should return nothing if successful", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.doesNotThrow(
        () => new_controller.deletePicture(new_picture),
        Error
      );
    });

    it("Should throw error if Picture not found", function () {
      let new_controller = new Controller();
      assert.throw(
        () => new_controller.deletePicture(new_picture),
        Error,
        "Picture not found"
      );
    });

    it("Add one picture and delete it. Size should be zero", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.deletePicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        0,
        "Function doesn't reduce list size to zero"
      );
    });
    it("Add two pictures and delete one. Size should be one", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      new_controller.deletePicture(new_picture);
      assert.equal(
        new_controller.getPictures().length,
        1,
        "Function does not reduce list size to one"
      );
    });
    it("Add two pictures. Size should be two", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      assert.equal(
        new_controller.getPictures().length,
        2,
        "Function does not reduce list size to two"
      );
    });
    it("Add one picture. The other one shouldn't be inside", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture2);
      assert.isFalse(
        new_controller.getPictures().includes(new_picture),
        "Function does includes a wrong picture"
      );
    });
  });

  describe("Controller getPictures", function () {
    let new_picture = new Picture(id, new_user, title, description, source);
    it("With no pictures, should list an empty list", function () {
      let new_controller = new Controller();
      assert.deepEqual(
        new_controller.getPictures(),
        [],
        "No Empty list returned"
      );
    });

    it("With one picture, should return a list with that picture", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      assert.deepEqual(
        new_controller.getPictures(),
        [new_picture],
        "No list with single element returned"
      );
    });

    it("With two pictures, should return a list with both pictures", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      assert.deepEqual(
        new_controller.getPictures(),
        [new_picture2, new_picture],
        "No list with both elements returned"
      );
    });

    it("Adding two pictures, and removing the first should return a list with the second picture", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      new_controller.deletePicture(new_picture);
      assert.deepEqual(
        new_controller.getPictures(),
        [new_picture2],
        "No list with only second element returned"
      );
    });
    it("Adding two pictures, and removing them return a empty list", function () {
      let new_controller = new Controller();
      new_controller.addPicture(new_picture);
      new_controller.addPicture(new_picture2);
      new_controller.deletePicture(new_picture);
      new_controller.deletePicture(new_picture2);
      assert.deepEqual(
        new_controller.getPictures(),
        [],
        "No empty list returned"
      );
    });
  });
  describe(`Load sample picture`, function () {
    it("Should be uploaded", function () {
      let new_controller = new Controller();
      readFile(`${__dirname}/sample_pic.png`, (err, data) => {
        if (err) throw err;

        assert.doesNotThrow(
          () => new_controller.uploadPicture(new_picture, data),
          Error
        );
      });
    });
  });
});
