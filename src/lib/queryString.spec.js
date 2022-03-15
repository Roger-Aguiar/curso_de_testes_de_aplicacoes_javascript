const { queryString } = require("./queryString");

describe("Object to query string", () => {
  it("should create a valid query string", () => {
    const obj = { name: "Roger", profession: "developer" };
    expect(queryString(obj)).toBe("name=Roger&profession=developer");
  });
});
