import axios from 'axios';

const MarketAPI = 'http://localhost:8081/v1/api/market';

export const fetchMarkets = async () => {
  let url = MarketAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load markets');
  }
};

const VendorAPI = 'http://localhost:8081/v1/api/vendor';

export const fetchVendors = async () => {
  let url = VendorAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load vendors');
  }
};
