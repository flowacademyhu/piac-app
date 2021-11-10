const textIsIncludesKeyword = require("./textIsIncludesKeyword");

const filteredArrayByKeyword = (objectArray, keyword) => {
  return keyword.length === 0
    ? objectArray
    : objectArray.filter(
        (object) =>
          textIsIncludesKeyword(object.name, keyword) ||
          textIsIncludesKeyword(object.products.join(" "), keyword) ||
          textIsIncludesKeyword(object.intro, keyword) ||
          textIsIncludesKeyword(object.introductionLong, keyword)
      );
};

module.exports = filteredArrayByKeyword;
