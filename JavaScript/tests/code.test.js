const gte = require("../app");

describe("gte", () => {
  it("should return true if a is greater than b", () => {
    const res = gte(10, 9);
    expect(res).toBe(true); // درست است چون 10 > 9
  });

  it("should return false if a is less than b", () => {
    const res = gte(5, 9);
    expect(res).toBe(false); // درست است چون 5 < 9
  });
});
