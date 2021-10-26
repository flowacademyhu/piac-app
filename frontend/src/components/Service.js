import axios from 'axios';

const MarketAPI = 'http://localhost:8081/v1/api/market';

export const fetchMarkets = async () => {
  let url = MarketAPI;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('failed to fetch Markets');
    throw Error(error);
  }
};
