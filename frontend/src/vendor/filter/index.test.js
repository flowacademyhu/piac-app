import filteredArrayByKeyword from "./index";

const objectArray = [
  {
    id: 1,
    name: "Chilikirály",
    intro: null,
    profilePic: null,
    products: ["chilik", "paprikakrémek", "csípős szószok"],
    cardPayment: true,
    email: "chiliking@flow.hu",
    facebook: "Chiliking-Facebook",
    instagram: null,
    phone: "+36302345678",
    webSite: null,
    introductionLong: "Chilizz belünk, Magyarország legjobb chilijeivel...",
  },
  {
    id: 2,
    name: "Just incase",
    intro: "Praktikus termékek, környezettudatos ajándékcsomagok....",
    profilePic: null,
    products: ["lebomló zacskók", "kézműves szappanok", "papírdobozok"],
    cardPayment: true,
    email: "csakugy@flow.hu",
    facebook: "JustInCase-Facebook",
    instagram: "justInCase.insta",
    phone: "+36308765432",
    webSite: "www.justincase.com",
    introductionLong:
      "Praktikus termékek, környezettudatos ajándékcsomagok....",
  },
];

const objectArrayWithValueNull = [
  {
    id: 1,
    name: "Chilikirály",
    intro: null,
    profilePic: null,
    products: ["chilik", "paprikakrémek", "csípős szószok"],
    cardPayment: true,
    email: "chiliking@flow.hu",
    facebook: "Chiliking-Facebook",
    instagram: null,
    phone: "+36302345678",
    webSite: null,
    introductionLong: null,
  },
  {
    id: 2,
    name: "Just incase",
    intro: null,
    profilePic: null,
    products: ["lebomló zacskók", "kézműves szappanok", "papírdobozok"],
    cardPayment: true,
    email: "csakugy@flow.hu",
    facebook: "JustInCase-Facebook",
    instagram: "justInCase.insta",
    phone: "+36308765432",
    webSite: "www.justincase.com",
    introductionLong: null,
  },
];

test("given an array with two object, when the search term is an empty string, then returns the full array", () => {
  expect(filteredArrayByKeyword(objectArray, "")).toStrictEqual(objectArray);
});

test("given an array with two object, when the search term is 'király', then returns the first object of the array", () => {
  expect(filteredArrayByKeyword(objectArray, "csipös szoszok")).toStrictEqual([
    objectArray[0],
  ]);
});

test("given an array with two objects, when the search term is 'zacskók', returns the second object of the array", () => {
  expect(filteredArrayByKeyword(objectArray, "lebomlozacsko")).toStrictEqual([
    objectArray[1],
  ]);
});

test("given an array with two objects, when the search term is 'tacocat', then returns an empty array", () => {
  expect(filteredArrayByKeyword(objectArray, "tacocat")).toStrictEqual([]);
});

test("given an array with two objects, when the search term is 'le', then returns the fully array", () => {
  expect(filteredArrayByKeyword(objectArray, "le")).toStrictEqual(objectArray);
});

test("given an array with two objects with some null values, when the search term is 'zo', then returns the fully array", () => {
  expect(filteredArrayByKeyword(objectArrayWithValueNull, "zo")).toStrictEqual(
    objectArrayWithValueNull
  );
});

test("given an array with two object with some values null, when the search term is an empty string, then returns the full array", () => {
  expect(filteredArrayByKeyword(objectArrayWithValueNull, "")).toStrictEqual(
    objectArrayWithValueNull
  );
});

test("given an array with two objects with some value null, when the search term is 'király', then returns the first object of the array", () => {
  expect(
    filteredArrayByKeyword(objectArrayWithValueNull, "papir dobozok")
  ).toStrictEqual([objectArrayWithValueNull[1]]);
});
