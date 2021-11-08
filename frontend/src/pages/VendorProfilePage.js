import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VendorHeader from '../components/VendorHeader';
import VendorInfoNav from '../components/VendorInfoNav';
import {
  fetchVendorById,
  fetchUpcomingMarketsByVendorId
} from '../components/Service';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import VendorProfileInfo from '../components/VendorProfileInfo';
import VendorProfileMarkets from '../components/VendorProfileMarkets';

const VendorProfilePage = () => {
  const [vendor, setVendor] = useState({});
  const [error, hasError] = useState(false);
  const vendorId = useParams().id;
  const showMarkets = useParams().piacok;
  const [upcomingMarkets, setUpcomingMarkets] = useState([]);

  useEffect(() => {
    const fetchVendor = async (id) => {
      const response = await fetchVendorById(id);
      if (!response) {
        hasError(true);
      } else {
        setVendor(response);
        console.log(vendorId);
      }
    };
    const fetchUpcomingMarkets = async (id) => {
      const response = await fetchUpcomingMarketsByVendorId(id);
      setUpcomingMarkets(response);
    };
    fetchUpcomingMarkets(vendorId);
    fetchVendor(vendorId);
  }, [vendorId]);

  return (
    <>
      {!error && vendor.id ? (
        <>
          <VendorHeader
            profilePic={vendor.profilePic}
            name={vendor.name}
            intro={vendor.intro}
            cardPayment={vendor.cardPayment}
          />
          <VendorInfoNav vendorId={vendorId} showMarkets={showMarkets} />
          {!showMarkets ? (
            <VendorProfileInfo
              products={vendor.products}
              facebook={vendor.facebook}
              instagram={vendor.instagram}
              website={vendor.webSite}
              email={vendor.email}
              phone={vendor.phone}
              introductionLong={vendor.introductionLong}
            />
          ) : (
            <VendorProfileMarkets upcomingMarkets={upcomingMarkets} />
          )}
        </>
      ) : (
        <div style={{ height: '90%' }} />
      )}
      {error && <Redirect to="/arusok" />}
    </>
  );
};

export default VendorProfilePage;
