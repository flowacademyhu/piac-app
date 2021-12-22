import axios from "axios";
import { Market, MarketInput } from "market/Market";
import { VendorInput, VendorWithId } from "vendor/Vendor";
import { getToken, logOut } from "./AuthService";

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
  const { data } = await api.get<Market>(`/market/${id}`);
  return data;
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
  const { data } = await api.get<VendorWithId[]>("/vendor");
  return data;
};

export const deleteMarketById = async (id: string) => {
  try {
    const response = await api.delete(`/admin/market/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to delete market");
  }
};

export const deleteVendorById = async (id: string) => {
  try {
    const response = await api.delete(`/admin/vendor/${id}`);
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

export const addVendor = async (vendor: VendorInput) => {
  const { data } = await api.post("/admin/vendor", vendor);
  return data;
};

export const updateVendor = async (vendor: VendorInput, id: string) => {
  const { data } = await api.put(`/admin/vendor/${id}`, vendor);
  return data;
};
