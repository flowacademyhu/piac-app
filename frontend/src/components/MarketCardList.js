import MarketCard from './MarketCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MarketCardList.css';

const title = ['Bödön Piac', 'Böba piac'];
const location = 'Szeged Plaza';
const date = '2021. október 23. 09:00-13:00';
const vendorsAmount = '84 árus';
const imageLogo = [
  'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/117391980_101212148362048_3509463433295380058_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=UcxtGaHhRHMAX98qWlB&_nc_ht=scontent-vie1-1.xx&oh=e84edba1a28581edcf46057937321bcf&oe=6193C297',

  'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/210791482_3810484415724737_5297100901497528974_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=jijjS7nPD94AX_sKJFP&_nc_ht=scontent-vie1-1.xx&oh=f4454645cf4f58853c839be8f160b482&oe=6194680F'
];

const MarketCardList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    console.log(response);

    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="card-list">
      {posts.map((post, index) => {
        return (
          <MarketCard
            imageLogo={imageLogo[Math.round(Math.random())]}
            title={post.name}
            location={post.address.city}
            date={post.address.zipcode}
            lat={post.address.geo.lat}
            vendorsAmount={vendorsAmount}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MarketCardList;
