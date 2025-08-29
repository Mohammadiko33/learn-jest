const gte = require("../app");

test("gte - should return true if a is greater than b", () => {
    const res = gte(10, 9);
    expect(res).toBe(true); // درست است چون 10 > 9
});

test("gte - should return false if a is less than b", () => {
    const res = gte(5, 9);
    expect(res).toBe(false); // درست است چون 5 < 9
});

test("gte - should return true if a is equal to b", () => {
    const res = gte(7, 7);
    expect(res).toBe(true); // درست است چون 7 === 7
});
