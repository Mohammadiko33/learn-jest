const { getUserById, sendEmail } = require("../service");
const { calculateDiscount } = require("../app");

jest.mock("../service");

describe("calculate discount", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 10 if user has more than 3 purchases", () => {
    getUserById.mockReturnValue({ id: 4, name: "john", purchasesCount: 7 });
    expect(calculateDiscount(4)).toBe(10);
  });

  it("should return 0 and send email if user has 3 or fewer purchases", () => {
    getUserById.mockReturnValue({ id: 4, name: "john", purchasesCount: 2 });

    const result = calculateDiscount(4);

    expect(result).toBe(0);
    expect(sendEmail).toHaveBeenCalled();
    expect(sendEmail.mock.calls[0][0]).toBe("john");
    expect(sendEmail.mock.calls[0][1]).toContain("0 percent");
  });
});