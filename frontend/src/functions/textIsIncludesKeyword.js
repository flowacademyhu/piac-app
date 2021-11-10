const ignoreAccents = require("./ignoreAccents");

const textIsIncludesKeyword = (text, keyword) => {
  return ignoreAccents(text)
    .toLowerCase()
    .includes(ignoreAccents(keyword).toLowerCase());
};

module.exports = textIsIncludesKeyword;
