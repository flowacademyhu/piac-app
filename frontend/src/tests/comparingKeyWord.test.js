const textIsIncludesKeyword = require("../functions/textIsIncludesKeyword");

test("given a string 'dog', when the search term is an empty string, then returns true", () => {
  expect(textIsIncludesKeyword("dog", "")).toBe(true);
});

test("given a string 'pirate', when the search term is 'PiRaTe', then returns true", () => {
  expect(textIsIncludesKeyword("pirate", "PiRaTe")).toBe(true);
});

test("given a string 'pirate', when the search term is 'cat', then returns false", () => {
  expect(textIsIncludesKeyword("pirate", "cat")).toBe(false);
});

test("given a string 'kitchen', when the search term is 'market', then returns false", () => {
  expect(textIsIncludesKeyword("kitchen", "market")).toBe(false);
});
