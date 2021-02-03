import { assert, expect } from "chai";
import { Id } from "../src/common/models/Id";
import {
  version as uuidVersion,
  validate as uuidValidate,
  v4 as uuid_v4,
  v1 as uuid_v1,
} from "uuid";

describe("Unit Tests Id.ts", function () {
  describe(`Load source file: ${__dirname}/../src/Id.ts`, function () {
    it("Should be loaded", function () {
      assert.ok(Id, "Loaded");
    });
  });

  describe("Create", function () {
    it("Should create Id correctly", function () {
      let new_id = new Id();
      expect(new_id).to.be.an("Id", "The object is not an Id");
    });

    it("Should print Id correctly", function () {
      let new_uuid = uuid_v4();
      let new_id = new Id(new_uuid);
      assert.equal(
        new_id.toString(),
        new_uuid,
        "The id printed is not as expected"
      );
    });

    it("Should generate a new Id when called without arguments", function () {
      var new_id = new Id();
      assert.notDeepEqual(new_id.valueOf(), "", "The id hasn't been generated");
    });

    it("Should be an UUID the id generated ", function () {
      var new_id = new Id();
      assert.ok(
        uuidValidate(new_id.toString()),
        "The id generated is not a valid UUID"
      );
    });

    it("Should be a version 4 UUID ", function () {
      var new_id = new Id();
      assert.equal(
        uuidVersion(new_id.toString()),
        4,
        "The UUID is not version 4"
      );
    });

    it("Should throw an error when passing an invalid Id ", function () {
      assert.throws(() => new Id("12"));
    });

    it("Should throw an error when passing an UUID from different versions ", function () {
      assert.throws(() => new Id(uuid_v1()));
    });
  });
});
