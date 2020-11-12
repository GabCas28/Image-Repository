import { assert } from "chai";
import { User } from "../User";
import { Picture } from "../Picture";

describe("Unit Tests Picure.ts", function () {
  var test_user = new User("Gabriel", "Castro", "test@gmail.com", "password");

  // Testea que se haya cargado bien la librería
  describe("Load source file: " + __dirname + "/../Picture.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Picture, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Pictures correctly", function () {
      var title =
        "Enim veniam do officia elit consequat in eiusmod magna dolor incididunt cupidatat tempor ad.";
      var description =
        "Deserunt ullamco sunt proident qui dolore reprehenderit officia commodo cillum dolore in irure. Pariatur esse quis cillum ea est sint pariatur sunt officia. Tempor cillum ullamco culpa laboris culpa culpa quis qui cillum irure nostrud sit nisi. Reprehenderit irure adipisicing do laborum adipisicing aliquip ea nulla nulla mollit eiusmod.";
      var source = "";
      
      var new_Picture = new Picture(test_user, title, description, source);
      assert.equal(
        new_Picture.toString(),
        `Gabriel Castro - test@gmail.com:\nEnim veniam do officia elit consequat in eiusmod magna dolor incididunt cupidatat tempor ad.\nDeserunt ullamco sunt proident qui dolore reprehenderit officia commodo cillum d...\nSource:`
      );
    });
  });
});
