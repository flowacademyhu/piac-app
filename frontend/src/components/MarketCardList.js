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
        return (
          <div key={post.id}>
            <Link to={`/piacok/${post.id}`} style={{ textDecoration: 'none' }}>
              <MarketCard
                style={{ textDecoration: 'none' }}
                profilePic={post.profilePic}
                marketName={post.name}
                marketLocation={post.place}
                marketDateYearMonthDay={post.date}
                vendorsAmount={post.numberOfVendors}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MarketCardList;
