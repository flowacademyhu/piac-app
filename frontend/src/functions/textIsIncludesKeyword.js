const textIsIncludesKeyword = (text, keyword) => {
  return text.toLowerCase().includes(keyword.toLowerCase());
};

module.exports = textIsIncludesKeyword;
