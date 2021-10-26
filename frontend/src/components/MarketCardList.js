import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MarketCardList.css';

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
    <div className='card-list'>
      {posts.map((post) => {
        return (
          <MarketCard
            profilePic={post.profilePic}
            marketName={post.name}
            marketLocation={post.place}
            marketDateYearMonthDay={post.date}
            marketDateHours={post.startAndEndHour}
            vendorsAmount={post.numberOfVendors}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default MarketCardList;
