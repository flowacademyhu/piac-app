import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 3c9f118c011a7a2c07e74a86a9b67e0b64320250
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
            marketDateYearMonthDay={post.date}
            marketDateHours={post.startAndEndHour}
            vendorsAmount={post.numberOfVendors}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MarketCardList;
