import React, { useState, useEffect } from 'react';
import '../styles/MarketCardList.css';
import { fetchVendors } from './Service';
import VendorCard from './VendorCard';
import { Link } from 'react-router-dom';

const VendorCardList = () => {
  const [vendors, setVendors] = useState([]);

  const getVendors = async () => {
    const result = await fetchVendors();
    setVendors(result);
  };

  useEffect(() => {
    getVendors();
  }, []);

  console.log(vendors);

  return (
    <div className="card-list">
      {vendors.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/arusok/${post.id}`} style={{ textDecoration: 'none' }}>
              <VendorCard
                imageLogo={post.profilePic}
                vendor={post.name}
                vendorDesc={post.intro}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VendorCardList;
