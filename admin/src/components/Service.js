import axios from "axios";

const MarketAPI = "/v1/api/market";

export const fetchMarkets = async () => {
  const url = MarketAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
  }
};

const VendorAPI = "/v1/api/vendor";

export const fetchVendors = async () => {
  const url = VendorAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendors");
  }
};

const adminMarketAPI = "/v1/api/admin/market";

export const deleteMarketById = async (id) => {
  const url = adminMarketAPI + "/" + id;
  try {
    const response = await axios.delete(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to delete market");
  }
};

const adminVendorAPI = "/v1/api/admin/vendor";

export const deleteVendorById = async (id) => {
  const url = adminVendorAPI + "/" + id;
  try {
    const response = await axios.delete(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to delete vendor");
  }
};
