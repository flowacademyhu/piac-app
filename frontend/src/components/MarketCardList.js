import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MarketCardList.css';
import { Link } from 'react-router-dom';

const MarketCardList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get('http://localhost:8081/v1/api/market');

    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="card-list">
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/${post.id}`} style={{ textDecoration: 'none' }}>
            <div>
              <MarketCard
                style={{ textDecoration: 'none' }}
                profilePic={post.profilePic}
                marketName={post.name}
                marketLocation={post.place}
                marketDateYearMonthDay={post.date}
                marketDateHours={post.startAndEndHour}
                vendorsAmount={post.numberOfVendors}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MarketCardList;
