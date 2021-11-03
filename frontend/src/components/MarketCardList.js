import MarketCard from './MarketCard';
import React, { useState, useLayoutEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchCurrentMarkets } from './Service';
import { Link } from 'react-router-dom';

const MarketCardList = () => {
  const [currentMarkets, setCurrentMarkets] = useState([]);

  const getCurrentMarkets = async () => {
    const result = await fetchCurrentMarkets();
    setCurrentMarkets(result);
  };

  useLayoutEffect(() => {
    getCurrentMarkets();
  }, []);

  return (
    <div className='card-list'>
      {currentMarkets.map((market) => {
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
