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
