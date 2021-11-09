const filteringArray = (searchTerm, objectList) => {
  const comparingWithKeywords = (obj) => {
    return obj.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return searchTerm.length === 0
    ? objectList
    : objectList.filter(
        (object) =>
          comparingWithKeywords(object.name) ||
          comparingWithKeywords(object.products.join(" ")) ||
          comparingWithKeywords(object.intro) ||
          comparingWithKeywords(object.introductionLong)
      );
};

const sum = (a, b) => {
  return a + b;
};

module.exports = filteringArray;

module.exports = sum;
