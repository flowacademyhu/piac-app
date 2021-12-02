import axios from "axios";
import Market from "../vendor/profile/Market";

const api = axios.create({
  baseURL: "/v1/api",
});

export const fetchMarkets = async () => {
  try {
    const response = await api.get("/market");
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
    throw Error(
      "Nem sikerült betölteni az árusok listáját, nézz vissza kicsit később!"
    );
  }
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

export const fetchUpcomingMarkets = async () => {
  try {
    const response = await api.get("/market/upcoming");
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load upcoming markets");
    throw Error(
      "Nem sikerült betölteni a piacok listáját, nézz vissza kicsit később!"
    );
  }
};

export const fetchMarketById = async (id: string) => {
  try {
    const response = await api.get<Market>(`/market/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load market");
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

export const fetchUpcomingMarketsByVendorId = async (vendorId: string) => {
  try {
    const response = await api.get<Market[]>(`/vendor/${vendorId}/upcoming`);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
  }
};
