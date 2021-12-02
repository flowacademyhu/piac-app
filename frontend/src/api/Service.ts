import axios from "axios";
import Market from "../market/Market";

const api = axios.create({
  baseURL: "/v1/api",
});

export const fetchMarkets = async () => {
  try {
    const { data } = await api.get("/market");
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
    const { data } = await api.get("/vendor");
    return data;
  } catch (error) {
    console.warn("Failed to load vendors");
  }
};

export const fetchUpcomingMarkets = async () => {
  try {
    const { data } = await api.get("/market/upcoming");
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
    const { data } = await api.get<Market>(`/market/${id}`);
    return data;
  } catch (error) {
    console.warn("Failed to load market");
  }
};

export const fetchVendorById = async (id: string) => {
  try {
    const { data } = await api.get(`/vendor/${id}`);
    return data;
  } catch (error) {
    console.warn("Failed to load vendor");
  }
};

export const fetchUpcomingMarketsByVendorId = async (vendorId: string) => {
  try {
    const { data } = await api.get<Market[]>(`/vendor/${vendorId}/upcoming`);
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
  }
};
