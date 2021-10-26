import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import VendorHeader from '../components/VendorHeader';
import VendorInfoNav from '../components/VendorInfoNav';

const VendorProfilePage = ({ vendorId }) => {
  const [vendor, setVendor] = useState({});

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
        logo={vendor.logo}
        name={vendor.name}
        description={vendor.description}
        cardPayment={vendor.cardPayment}
      />
      <VendorInfoNav
        products={vendor.products}
        facebook={vendor.facebook}
        instagram={vendor.instagram}
        website={vendor.webSite}
        email={vendor.email}
        phone={vendor.phone}
        introduction={vendor.intro}
      />
      <Footer />
    </>
  );
};

export default VendorProfilePage;
