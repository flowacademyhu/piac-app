import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
<<<<<<< HEAD
import { fetchMarkets } from './Service';
=======
import { Link } from 'react-router-dom';
import { fetchVendors } from './Service';
>>>>>>> 3c9f118c011a7a2c07e74a86a9b67e0b64320250

const MarketCardList = () => {
  const [markets, setMarkets] = useState([]);

<<<<<<< HEAD
  const getMarkets = async () => {
    const result = await fetchMarkets();
    setMarkets(result);
  };

  useEffect(() => {
    getMarkets();
=======
const VendorCardList = () => {
  const [vendors, setVendors] = useState([]);

  const getVendors = async () => {
    const result = await fetchVendors();
    setVendors(result);
  };

  useEffect(() => {
    getVendors();
>>>>>>> 3c9f118c011a7a2c07e74a86a9b67e0b64320250
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
