import sortByName from "./sortByName";

const listOneNotSorted = [
  {
    name: "Just in case",
  },
  {
    name: "Chilikirály",
  },
  {
    name: "reeed",
  },
  {
    name: "Valami finom",
  },
  {
    name: "eznemegyalma",
  },
  {
    name: "Éléskamra",
  },
  {
    name: "Álomgyár",
  },
];

const listOneDefaultSorted = [
  {
    name: "Álomgyár",
  },
  {
    name: "Chilikirály",
  },
  {
    name: "Éléskamra",
  },
  {
    name: "eznemegyalma",
  },
  {
    name: "Just in case",
  },
  {
    name: "reeed",
  },
  {
    name: "Valami finom",
  },
];

const sortedListOne = [
  {
    name: "Álomgyár",
  },
  {
    name: "Chilikirály",
  },
  {
    name: "Éléskamra",
  },
  {
    name: "eznemegyalma",
  },
  {
    name: "Just in case",
  },
  {
    name: "reeed",
  },
  {
    name: "Valami finom",
  },
];

test("given an array with objects, when sort objects by name, then return the object list sorted by their name", () => {
  expect(listOneNotSorted.sort(sortByName)).toStrictEqual(sortedListOne);
});

test("given an array with objects alphabetical sorted defaultly, when sort objects by name, then return the object list sorted by their name", () => {
  expect(listOneDefaultSorted.sort(sortByName)).toStrictEqual(sortedListOne);
});
