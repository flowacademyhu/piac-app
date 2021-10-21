import VendorCard from './VendorCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const imageLogo =
  'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/128194749_3718400788226892_2631429779387369230_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ZRn8DPeEpMgAX_e0Aw-&_nc_ht=scontent-vie1-1.xx&oh=b25f36537a474921e7c1bf971c277d3c&oe=6195513B';

const VendorCardList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    console.log(response);

    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const title = 'Kígyóscsili';
  const body =
    'Ha szereted a csípős és extra erős csilipaprikákat, akkor jó helyen jársz! Szószok, krémek, füstölt csilipaprikák!';

  return posts.map((post, index) => {
    return (
      <div key={index}>
        <VendorCard imageLogo={imageLogo} vendor={title} body={body} />
      </div>
    );
  });
};

export default VendorCardList;
