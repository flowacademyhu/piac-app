import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
import { Link } from 'react-router-dom';
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
      {posts.map((post) => (
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
      ))}
    </div>
  );
};

export default MarketCardList;
