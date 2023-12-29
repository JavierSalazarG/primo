const calcPrimo = require("./index");

test("tiene que hacer 25 console.log, uno por cada primo", () => {
  const consoleSpy = jest.spyOn(console, "log");
  calcPrimo();
  expect(consoleSpy).toHaveBeenCalledTimes(25);
  consoleSpy.mockRestore();
});
