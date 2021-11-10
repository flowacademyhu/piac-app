const filteredArrayByKeyword = require("../functions/filteredArrayByKeyword");

const objectArray = [
  {
    id: 1,
    name: "Chilikirály",
    intro: "Chilizz belünk, Magyarország legjobb chilijeivel...",
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

test("given an array with two object, when the search term is an empty string, then returns the full array", () => {
  expect(filteredArrayByKeyword(objectArray, "")).toStrictEqual(objectArray);
});

test("given an array with two object, when the search term is 'király', then returns the first object of the array", () => {
  expect(filteredArrayByKeyword(objectArray, "király")).toStrictEqual([
    {
      cardPayment: true,
      email: "chiliking@flow.hu",
      facebook: "Chiliking-Facebook",
      id: 1,
      instagram: null,
      intro: "Chilizz belünk, Magyarország legjobb chilijeivel...",
      introductionLong: "Chilizz belünk, Magyarország legjobb chilijeivel...",
      name: "Chilikirály",
      phone: "+36302345678",
      products: ["chilik", "paprikakrémek", "csípős szószok"],
      profilePic: null,
      webSite: null,
    },
  ]);
});

test("given an array with two objects, when the search term is 'zacskók', returns the second object of the array", () => {
  expect(filteredArrayByKeyword(objectArray, "zacskó")).toStrictEqual([
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
  ]);
});

test("given an array with two objects, when the search term is 'tacocat', then returns an empty array", () => {
  expect(filteredArrayByKeyword(objectArray, "tacocat")).toStrictEqual([]);
});
