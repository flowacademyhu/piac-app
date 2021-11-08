import axios from "axios";

const MarketAPI = "/v1/api/market";

export const fetchMarkets = async () => {
  const url = MarketAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load markets');
    throw Error(
      'Nem sikerült betölteni az árusok listáját, nézz vissza kicsit később!'
    );
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
    console.warn('Failed to load vendors');
    throw Error(
      'Nem sikerült betölteni az árusok listáját, nézz vissza kicsit később!'
    );
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
    console.warn('Failed to load upcoming markets');
    throw Error(
      'Nem sikerült betölteni a piacok listáját, nézz vissza kicsit később!'
    );
  }
};

export const fetchMarketById = async (id) => {
  const url = MarketAPI + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load market');
    throw Error('Nem sikerült betölteni a kért piac oldalát!');
  }
};

export const fetchVendorById = async (id) => {
  const url = VendorAPI + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load vendor');
    throw Error('Nem sikerült betölteni a kért árus oldalát!');
  }
};

export const fetchUpcomingMarketsByVendorId = async (vendorId) => {
  const url = VendorAPI + "/" + vendorId + "/upcoming";
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load markets");
    throw Error(
      'Nem sikerült betölteni a piacok listáját, nézz vissza kicsit később!'
    );
  }
};
