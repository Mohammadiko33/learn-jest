const { gte, welcomeMessage, shoppingList, getUser, login } = require("../app");

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

describe("welcome message", () => {
  it("should return a welcome message containing the name", () => {
    const res = welcomeMessage("Mohammad");
    expect(res).toContain("Mohammad");
  });
});

describe("shopping List", () => {
  it("array coffe shop ", () => {
    const result = shoppingList();
    expect(result).toContain("cupcake");
  });
});

describe("get user", () => {
  it("shoud username: mohammad", () => {
    const res = getUser();
    expect(res).toHaveProperty("name", "mohammad");
  });
});

describe("login", () => {
  it("should throw an error if password is wrrong", () => {
    expect(() => login("1235")).toThrow()
  });
  it("should return jwt if password is not wrong" , () => {
    const res = login("1234")
    expect(res).toHaveProperty("jwt")
  })
});
