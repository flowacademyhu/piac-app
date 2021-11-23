import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VendorHeader from "./VendorHeader";
import {
  fetchVendorById,
  fetchUpcomingMarketsByVendorId,
} from "../../api/Service";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import VendorProfileInfo from "./VendorProfileInfo";
import VendorProfileMarkets from "./VendorProfileMarkets";
import "./VendorInfoNav.css";
import { useQuery } from "react-query";

const VendorProfilePage = () => {
  // const [vendor, setVendor] = useState({});
  const vendorId = useParams().id;
  // const [upcomingMarkets, setUpcomingMarkets] = useState([]);

  const {
    data: vendor,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["vendor", vendorId], () => fetchVendorById(vendorId));

  const { data: upcomingMarkets } = useQuery(["market", vendorId], () =>
    fetchUpcomingMarketsByVendorId(vendorId)
  );

  return (
    <>
      {!isLoading && !isError && vendor.id ? (
        <>
          <VendorHeader
            profilePic={vendor.profilePic}
            name={vendor.name}
            intro={vendor.intro}
          />
          <VendorProfileInfo
            products={vendor.products}
            cardPayment={vendor.cardPayment}
            facebook={vendor.facebook}
            instagram={vendor.instagram}
            website={vendor.webSite}
            email={vendor.email}
            phone={vendor.phone}
            introductionLong={vendor.introductionLong}
          />
          <VendorProfileMarkets upcomingMarkets={upcomingMarkets} />
        </>
      ) : (
        <div style={{ height: "90%" }} />
      )}
      {!isSuccess && <Redirect to="/arusok" />}
    </>
  );
};

export default VendorProfilePage;
