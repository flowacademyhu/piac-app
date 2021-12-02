import axios, { AxiosResponse } from "axios";
import Market from "../vendor/profile/Market";

const api = axios.create({
  baseURL: "/v1/api/",
});

const MarketAPI = "market";

export const fetchMarkets = async () => {
  const url = MarketAPI;
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

const VendorAPI = "vendor";

export const fetchVendors = async () => {
  const url = VendorAPI;
  try {
    const response = await api.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendors");
  }
};

const UpcomingMarketAPI = "/v1/api/market/upcoming";

export const fetchUpcomingMarkets = async () => {
  const url = UpcomingMarketAPI;
  try {
    const response = await axios.get(url);
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
  const url = MarketAPI + "/" + id;
  try {
    const response: AxiosResponse<Market> = await api.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load market");
  }
};

export const fetchVendorById = async (id: string) => {
  const url = VendorAPI + "/" + id;
  try {
    const response = await api.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendor");
  }
};

export const fetchUpcomingMarketsByVendorId = async (vendorId: string) => {
  const url = VendorAPI + "/" + vendorId + "/upcoming";
  try {
    const response: AxiosResponse<Market[]> = await api.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
  }
};
