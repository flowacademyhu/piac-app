import axios from "axios";
import { getToken } from "./AuthService";

const tokenConfig = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};

const VendorAdminAPI = "/v1/api/admin/vendor";
const MarketAPI = "/v1/api/market";
const adminMarketAPI = "/v1/api/admin/market";

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

export const fetchMarketById = async (id) => {
  const url = adminMarketAPI + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load market");
  }
};

export const updateMarket = async (market, id, setSuccess, setHasError) => {
  try {
    const response = await axios.put(
      adminMarketAPI + "/" + id,
      market,
      tokenConfig
    );
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const addMarket = async (market) => {
  const { data } = await axios.post(adminMarketAPI, market, tokenConfig);
  return data;
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

export const deleteMarketById = async (id) => {
  const url = adminMarketAPI + "/" + id;
  try {
    const response = await axios.delete(url, tokenConfig);
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
    const response = await axios.delete(url, tokenConfig);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to delete vendor");
  }
};

export const fetchVendorById = async (id) => {
  const url = VendorAPI + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load vendor");
  }
};

export const addVendor = async (vendor, setSuccess, setHasError) => {
  try {
    const response = await axios.post(VendorAdminAPI, vendor, tokenConfig);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const updateVendor = async (vendor, id, setSuccess, setHasError) => {
  try {
    const response = await axios.put(
      VendorAdminAPI + "/" + id,
      vendor,
      tokenConfig
    );
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};
