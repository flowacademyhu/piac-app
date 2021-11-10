const matchFormat = require("./matchFormat");

const textIsIncludesKeyword = (text, keyword) => {
  return text !== null
    ? matchFormat(text)
        .toLowerCase()
        .includes(matchFormat(keyword).toLowerCase())
    : false;
};

module.exports = textIsIncludesKeyword;
