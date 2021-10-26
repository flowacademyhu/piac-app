import VendorCard from './VendorCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MarketCardList.css';
import { fetchVendors } from './Service';

const imageLogo =
  'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/128194749_3718400788226892_2631429779387369230_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ZRn8DPeEpMgAX_e0Aw-&_nc_ht=scontent-vie1-1.xx&oh=b25f36537a474921e7c1bf971c277d3c&oe=6195513B';

const VendorCardList = () => {
  const [vendors, setVendors] = useState([]);

  const getVendors = async () => {
    const result = await fetchVendors();
    setVendors(result);
  };

  useEffect(() => {
    getVendors();
  }, []);

  return (
    <div className="card-list">
      {vendors.map((post, index) => {
        return (
          <VendorCard
            imageLogo={imageLogo}
            vendor={post.name}
            vendorDesc={post.intro}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default VendorCardList;
