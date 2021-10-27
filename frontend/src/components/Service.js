import axios from 'axios';
import { getMarketById } from './VendorsByMarketPage';

const MarketAPI = '/v1/api/market';

export const fetchMarkets = async () => {
  const url = MarketAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load markets');
  }
};

const VendorAPI = '/v1/api/vendor';

export const fetchVendors = async () => {
  const url = VendorAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load vendors');
  }
};

const marketByIdAPI = `/v1/api/market`;

export const fetchMarketById = async (id) => {
  const url = marketByIdAPI;
  try {
    const response = await axios.get(url + '/' + id);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load markets');
  }
};
