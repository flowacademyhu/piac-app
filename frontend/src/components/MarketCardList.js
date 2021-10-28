<<<<<<< HEAD
import MarketCard from "./MarketCard";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "../styles/MarketCardList.css";
=======
import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchMarkets } from './Service';
import { Link } from 'react-router-dom';
>>>>>>> origin/develop

const MarketCardList = () => {
  const [markets, setMarkets] = useState([]);

<<<<<<< HEAD
  const getPosts = async () => {
    const response = await axios.get("http://localhost:8081/v1/api/market");

    setPosts(response.data);
=======
  const getMarkets = async () => {
    const result = await fetchMarkets();
    setMarkets(result);
>>>>>>> origin/develop
  };

  useEffect(() => {
    getMarkets();
  }, []);

  return (
    <div className="card-list">
<<<<<<< HEAD
      {posts.map((post, index) => {
=======
      {markets.map((post) => {
>>>>>>> origin/develop
        return (
          <div key={post.id}>
            <Link to={`/piacok/${post.id}`} style={{ textDecoration: 'none' }}>
              <MarketCard
                style={{ textDecoration: 'none' }}
                profilePic={post.profilePic}
                marketName={post.name}
                marketLocation={post.place}
                marketOpeningDate={post.openingDate}
                marketClosingDate={post.closingDate}
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
