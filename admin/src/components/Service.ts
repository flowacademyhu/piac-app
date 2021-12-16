import axios from "axios";
import { MarketInput } from "market/Market";
import Vendor from "vendor/Vendor";
import { getToken, logOut } from "./AuthService";

const tokenConfig = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};

const api = axios.create({ baseURL: "/v1/api" });

api.interceptors.request.use(function (config) {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${getToken()}`,
  };
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      logOut();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export const fetchMarkets = async () => {
  try {
    const { data } = await api.get("/market");
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
  }
};

export const fetchMarketById = async (id: string) => {
  if (!id) {
    throw new Error("Market id is required");
  }

  try {
    const { data } = await api.get(`/market/${id}`);
    return data;
  } catch (error) {
    console.warn("Failed to load market");
  }
};

export const updateMarket = async (market: MarketInput, id: string) => {
  const { data } = await api.put(`/admin/market/${id}`, market);
  return data;
};

export const addMarket = async (market: MarketInput) => {
  const { data } = await api.post("/admin/market", market);
  return data;
};

export const fetchVendors = async () => {
  try {
    const response = await api.get("/vendor");
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendors");
  }
};

export const deleteMarketById = async (id: string) => {
  try {
    const response = await api.delete(`/admin/market/${id}`, tokenConfig);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to delete market");
  }
};

export const deleteVendorById = async (id: string) => {
  try {
    const response = await api.delete(`/admin/vendor/${id}`, tokenConfig);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to delete vendor");
  }
};

export const fetchVendorById = async (id: string) => {
  try {
    const response = await api.get(`/vendor/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendor");
  }
};

export const addVendor = async (
  vendor: Vendor,
  setSuccess: (result: boolean) => void,
  setHasError: (result: boolean) => void
) => {
  try {
    const response = await api.post("/admin/vendor", vendor, tokenConfig);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const updateVendor = async (
  vendor: Vendor,
  id: string,
  setSuccess: (result: boolean) => void,
  setHasError: (result: boolean) => void
) => {
  try {
    const response = await api.put(`/admin/vendor/${id}`, vendor, tokenConfig);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};
