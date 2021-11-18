import matchFormat from "./matchFormat";

const textIsIncludesKeyword = (text, keyword) => {
  return text !== null
    ? matchFormat(text)
        .toLowerCase()
        .includes(matchFormat(keyword).toLowerCase())
    : false;
};

export default textIsIncludesKeyword;
