import matchFormat from "./matchFormat";

test("given a string, when includes characters with accent then returns the string without accented characters", () => {
  expect(matchFormat("Crème Brulée-Valami")).toStrictEqual("CremeBruleeValami");
});

test("given a string, when includes accented characters, then returns the string without accented characters", () => {
  expect(matchFormat("Ça été Mičić-. ÀÉÏÓÛ")).toStrictEqual("CaeteMicic.AEIOU");
});

test("given a string, when doesnt include accented character then returns the given string", () => {
  expect(matchFormat("k-i s- k-u  ty-a")).toStrictEqual("kiskutya");
});
