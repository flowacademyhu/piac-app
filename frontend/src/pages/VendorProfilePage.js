import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import VendorHeader from '../components/VendorHeader';
import VendorInfoNav from '../components/VendorInfoNav';
import fetchVendorById from '../components/Service';

const VendorProfilePage = () => {
  const [vendor, setVendor] = useState({});
  const vendorId = useParams().id;
  const showMarkets = useParams().piacok;

  useEffect(() => {
    const fetchVendor = async () => {
      const response = await axios.get(
        'http://localhost:8081/v1/api/vendor/' + vendorId
      );
      setVendor(response.data);
    };
    fetchVendor();
  }, [vendorId]);

  return (
    <>
      <VendorHeader
        profilePic={vendor.profilePic}
        name={vendor.name}
        intro={vendor.intro}
        cardPayment={vendor.cardPayment}
      />
      <VendorInfoNav
        vendorId={vendorId}
        showMarkets={showMarkets}
        products={vendor.products}
        facebook={vendor.facebook}
        instagram={vendor.instagram}
        website={vendor.webSite}
        email={vendor.email}
        phone={vendor.phone}
        introductionLong={vendor.introductionLong}
      />
      <Footer />
    </>
  );
};

export default VendorProfilePage;
