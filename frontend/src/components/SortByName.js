const matchFormat = require("../functions/matchFormat");

const sortByName = function (a, b) {
  const nameA = matchFormat(a.name);
  const nameB = matchFormat(b.name);
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};

export default sortByName;
