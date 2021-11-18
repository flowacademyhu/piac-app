import textIsIncludesKeyword from "../functions/textIsIncludesKeyword";

test("given a long text, when the search term is an empty string, then returns true", () => {
  expect(
    textIsIncludesKeyword(
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      ""
    )
  ).toBe(true);
});

test("given a string 'pirate', when the search term is 'PiRaTe', then returns true", () => {
  expect(textIsIncludesKeyword("pira te", "PIR ate")).toBe(true);
});

test("given a long text, when the search term is 'cat', then returns false", () => {
  expect(
    textIsIncludesKeyword(
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "cat"
    )
  ).toBe(false);
});

test("given a long text, when the search term is 'lor', then returns true", () => {
  expect(
    textIsIncludesKeyword(
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      "lor"
    )
  ).toBe(true);
});
