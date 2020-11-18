import { assert } from "chai";
import { User } from "../src/User";
import { Review } from "../src/Review";

describe("Unit Tests Review.ts", function () {
  var test_user = new User("Gabriel", "Castro", "test@gmail.com");

  // Testea que se haya cargado bien la librería
  describe("Load source file: " + __dirname + "/../src/Review.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Review, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Reviews correctly", function () {
      var title =
        "Enim veniam do officia elit consequat in eiusmod magna dolor incididunt cupidatat tempor ad.";
      var body =
        "Deserunt ullamco sunt proident qui dolore reprehenderit officia commodo cillum dolore in irure. Pariatur esse quis cillum ea est sint pariatur sunt officia. Tempor cillum ullamco culpa laboris culpa culpa quis qui cillum irure nostrud sit nisi. Reprehenderit irure adipisicing do laborum adipisicing aliquip ea nulla nulla mollit eiusmod.";

      var new_Review = new Review(test_user, title, body);
      assert.equal(
        new_Review.toString(),
        `Gabriel Castro - test@gmail.com:\nEnim veniam do officia elit consequat in eiusmod magna dolor incididunt cupidatat tempor ad.\nDeserunt ullamco sunt proident qui dolore reprehenderit officia commodo cillum d...\nVotes:0`
      );
    });
  });
});
