export const getToken = () => {
  return window.localStorage.getItem("token");
};

export const logOut = () => {
  window.localStorage.removeItem("token");
};
