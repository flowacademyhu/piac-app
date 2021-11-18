const sortByName = function (a, b) {
  const nameA = a.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const nameB = b.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};

export default sortByName;
