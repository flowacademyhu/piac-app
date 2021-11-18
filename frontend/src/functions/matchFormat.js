const matchFormat = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ |-/g, "");
};

export default matchFormat;
