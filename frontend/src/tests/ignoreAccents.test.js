const ignoreAccents = require("../functions/ignoreAccents");

test("given a string, when includes characters with accent then returns the string without accented characters", () => {
  expect(ignoreAccents("Crème Brulée")).toStrictEqual("Creme Brulee");
});

test("given a string, when includes accented characters, then returns the string without accented characters", () => {
  expect(ignoreAccents("Ça été Mičić. ÀÉÏÓÛ")).toStrictEqual(
    "Ca ete Micic. AEIOU"
  );
});

test("given a string, when doesnt include accented character then returns the given string", () => {
  expect(ignoreAccents("kiskutya")).toStrictEqual("kiskutya");
});
