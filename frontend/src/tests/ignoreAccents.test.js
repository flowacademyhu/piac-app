const ignoreAccents = require("./ignoreAccents");

test("given an array with two object, when the search term is an empty string, then returns the full array", () => {
  expect(ignoreAccents("Crème Brulée")).toStrictEqual("Crème Brulée");
});
