import axios from "axios";
import Market from "../vendor/profile/Market";

const api = axios.create({
  baseURL: "/v1/api",
});

export const fetchMarkets = async () => {
  const url = "/market";
  try {
    const response = await api.get(url);
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
  const url = "/vendor";
  try {
    const response = await api.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendors");
  }
};

export const fetchUpcomingMarkets = async () => {
  const url = "/market/upcoming";
  try {
    const response = await api.get(url);
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
  const url = "/market" + "/" + id;
  try {
    const response = await api.get<Market>(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load market");
  }
};

export const fetchVendorById = async (id: string) => {
  const url = "/vendor" + "/" + id;
  try {
    const response = await api.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendor");
  }
};

export const fetchUpcomingMarketsByVendorId = async (vendorId: string) => {
  const url = "/vendor" + "/" + vendorId + "/upcoming";
  try {
    const response = await api.get<Market[]>(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
  }
};
