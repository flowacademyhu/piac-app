
import jwtDecode from "jwt-decode";

export const getToken = () => {
  return window.localStorage.getItem("token");
};

export const setToken = (token) => {
  window.localStorage.setItem("token", token);
};

export const logOut = () => {
  window.localStorage.removeItem("token");
};

export const getUsername = () => {
  const decoded = jwtDecode(getToken());
  const userName = decoded.sub;
  return userName;
};
