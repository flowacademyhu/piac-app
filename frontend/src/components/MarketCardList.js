import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchMarkets } from './Service';
import { Link } from 'react-router-dom';

const MarketCardList = () => {
  const [markets, setMarkets] = useState([]);

  const getMarkets = async () => {
    const result = await fetchMarkets();
    setMarkets(result);
  };

  useEffect(() => {
    getMarkets();
  }, []);

  return (
    <div className="card-list">
      {markets.map((post) => {
      {markets.map((market) => {
        return (
          <div key={market.id}>
            <Link
              to={`/piacok/${market.id}`}
              style={{ textDecoration: 'none' }}
            >
              <MarketCard
                style={{ textDecoration: 'none' }}
                profilePic={market.profilePic}
                marketName={market.name}
                marketLocation={market.place}
                marketOpeningDate={market.openingDate}
                marketClosingDate={market.closingDate}
                vendorsAmount={market.numberOfVendors}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MarketCardList;
