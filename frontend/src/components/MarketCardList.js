import MarketCard from './MarketCard';
import React, { useState, useLayoutEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchUpcomingMarkets } from './Service';
import { Link } from 'react-router-dom';
import VendorlistUploadInProgress from './VendorlistUploadInProgress';

const MarketCardList = () => {
  const [upcomingMarkets, setUpcomingMarkets] = useState([]);
  const [error, setError] = useState(null);

  const getUpcomingMarkets = async () => {
    const result = await fetchUpcomingMarkets();
    setUpcomingMarkets(result);
  };

  useLayoutEffect(() => {
    getUpcomingMarkets().catch((err) => setError(err.message));
  }, []);

  return error
? (
    <>
      <VendorlistUploadInProgress title={error} />
    </>
  )
: (
    <div className='card-list'>
      {upcomingMarkets.map((market) => {
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
