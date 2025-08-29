const service = require("../service")
const app = require("../app")

describe("calculate discount" , () => {
  it("should return 10 if user has more than 3 purchase", () => {
    expect(async () => {
      const mockFunction = jest.fn()
      mockFunction.mockResolvedValue(12)
      await mockFunction() // 12
    })
  })
  it("should return 10 if user has more than 3 purchase", () => {
    expect(() => {

    })
  })
  it("should return 0 if user has more than 3 purchase", () => {
    expect(() => {

    })
  })
})