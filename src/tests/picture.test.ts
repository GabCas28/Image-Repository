import { assert, expect } from "chai";
import { User } from "../User";
import { Picture } from "../Picture";

describe("Unit Tests Picture.ts", function () {
  var test_user = new User("Gabriel", "Castro", "test@gmail.com");
  var title = "Test Picture 1";
  var description = "Test Description for test picture 1";
  var source = "/example/picture.png";

  // Testea que se haya cargado bien la librería
  describe("Load source file: " + __dirname + "/../Picture.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Picture, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Pictures correctly", function () {
      var new_picture = new Picture(test_user, title, description, source);
      expect(new_picture).to.be.a("Picture");
    });
    it("Should print Pictures correctly", function () {
      var new_picture = new Picture(test_user, title, description, source);
      assert.equal(
        new_picture.toString(),
        `Gabriel Castro - test@gmail.com:\nTest Picture 1\nTest Description for test picture 1...\nSource:/example/picture.png`
      );
    });
  });

  describe("isValid", function () {
    it("Should return false if Picture has blank source", function () {
      var new_picture = new Picture(test_user, title, description, "");
      assert.isFalse(new_picture.isValid());
    });
    it("Should return true if Picture everything is ok", function () {
      var new_picture = new Picture(test_user, title, description, source);
      assert.isTrue(new_picture.isValid());
    });
  });
});
