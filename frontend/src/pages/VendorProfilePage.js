import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VendorHeader from '../components/VendorHeader';
import VendorInfoNav from '../components/VendorInfoNav';
import { fetchVendorById } from '../components/Service';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const VendorProfilePage = () => {
  const [vendor, setVendor] = useState({});
  const vendorId = useParams().id;
  const showMarkets = useParams().piacok;

  useEffect(() => {
    const fetchVendor = async (id) => {
      const response = await fetchVendorById(id);
      setVendor(response);
    };
    fetchVendor(vendorId);
  }, [vendorId]);

  return vendor ? (
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
    </>
  ) : (
    <Redirect to="/arusok" />
  );
};

export default VendorProfilePage;
