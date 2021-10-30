import MarketCard from './MarketCard';
import React, { useState, useLayoutEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchMarkets } from './Service';
import { Link } from 'react-router-dom';

const MarketCardList = () => {
  const [markets, setMarkets] = useState([]);
  let currentTime = new Date();

  const getMarkets = async () => {
    const result = await fetchMarkets();
    setMarkets(result);
  };

  useLayoutEffect(() => {
    getMarkets();
  }, []);

  return (
    <div className="card-list">
      {markets.map((market) => {
        if (currentTime.getTime() / 1000 < market.closingDate) {
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
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default MarketCardList;
