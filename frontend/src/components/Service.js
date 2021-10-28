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

export const fetchMarketById = (id) => {
  let fetchMarket;
  const MarketAPIById = `/v1/api/market/${id}`;
  return (fetchMarket = async () => {
    const url = MarketAPIById;
    try {
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.warn('Failed to load market');
    }
  });
};

export const fetchVendorById = async (id) => {
  const url = VendorAPI + '/' + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn('Failed to load vendor');
  }
};
