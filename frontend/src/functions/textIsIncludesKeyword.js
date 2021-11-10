const matchFormat = require("./matchFormat");

const textIsIncludesKeyword = (text, keyword) => {
  return matchFormat(text)
    .toLowerCase()
    .includes(matchFormat(keyword).toLowerCase());
};

module.exports = textIsIncludesKeyword;
