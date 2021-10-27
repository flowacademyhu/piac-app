import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchMarkets } from './Service';

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
      {markets.map((post, index) => {
        return (
          <MarketCard
            profilePic={post.profilePic}
            marketName={post.name}
            marketLocation={post.place}
            marketOpeningDate={post.openingDate}
            marketClosingDate={post.closingDate}
            vendorsAmount={post.numberOfVendors}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MarketCardList;
