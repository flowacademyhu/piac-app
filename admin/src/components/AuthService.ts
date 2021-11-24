import jwtDecode, { JwtPayload } from "jwt-decode";

export const getToken = (): string | null => {
  return window.localStorage.getItem("token");
};

export const setToken = (token: string) => {
  window.localStorage.setItem("token", token);
};

export const logOut = () => {
  window.localStorage.removeItem("token");
};

export const getUsername = () => {
  const token = getToken();

  if (!token) {
    return null;
  }
  const decoded = jwtDecode<JwtPayload>(token);
  const userName = decoded.sub;
  return userName;
};
