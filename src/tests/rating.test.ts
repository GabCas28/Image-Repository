import { assert } from "chai";
import { User } from "../User";
import { Rating } from "../Rating";

describe("Unit Tests Rating.ts", function () {
  var test_user = new User("Gabriel", "Castro", "test@gmail.com");
  // Testea que se haya cargado bien la librería
  describe("Load source file: " + __dirname + "/../Rating.ts", function () {
    it("Should be loaded", function () {
      assert.ok(Rating, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Ratings correctly", function () {
      var rating_value = 5;
      var new_Rating = new Rating(test_user, rating_value);
      assert.equal(new_Rating.toString(), `Gabriel Castro - test@gmail.com - Rating:5`);
    });
  });
});
