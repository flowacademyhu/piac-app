import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import "./VendorInfoNav.css";
import Products from "./Products";
import info_mid from "./../icons/navigation/info_mid.svg";
import info_primary from "./../icons/navigation/info_primary.svg";
import market_mid from "./../icons/navigation/market_mid.svg";
import market_primary from "./../icons/navigation/market_primary.svg";

import VendorContacts from "./VendorContacts";
import VendorIntroduction from "./VendorIntroduction";

import { fetchUpcomingMarketsByVendorId } from "./Service";
import MarketCard from "./MarketCard";
import "../styles/MarketCardList.css";

const VendorInfoNav = ({
  vendorId,
  showMarkets,
  products,
  facebook,
  instagram,
  website,
  email,
  phone,
  introductionLong
}) => {
  const [status, changeStatus] = useState(!showMarkets);
  const [upcomingMarkets, setUpcomingMarkets] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUpcomingMarkets = async (id) => {
      const response = await fetchUpcomingMarketsByVendorId(vendorId);
      setUpcomingMarkets(response);
      if (!response) {
        setHasError(true);
      } else {
        setUpcomingMarkets(response);
      }
    };
    fetchUpcomingMarkets(vendorId);
  }, [vendorId]);

  return (
    <>
      <div className="icons">
        <Router>
          <div className="info-icon">
            <NavLink
              activeClassName={`${showMarkets ? "" : "active"}`}
              to={`/arusok/${vendorId}`}
            >
              <div
                className={"image " + (status ? "active-page" : null)}
                onClick={() => changeStatus(true)}
              >
                <img src={status ? info_primary : info_mid} alt="info" />
              </div>
            </NavLink>
          </div>
          <div className="vendor-icon">
            <NavLink to={`/arusok/${vendorId}/piacok`}>
              <div
                className={"image " + (status ? null : "active-page")}
                onClick={() => changeStatus(false)}
              >
                <img src={status ? market_mid : market_primary} alt="market" />
              </div>
            </NavLink>
          </div>
        </Router>
      </div>
      {!status ? (
        <div>
          <h2 className="vendor-profile-markets-title">
            Melyik piacon találod legközelebb?
          </h2>
          <div className="card-list">
            {upcomingMarkets.length > 0 ? (
              upcomingMarkets.map((market) => {
                return (
                  <div key={market.id}>
                    <Link
                      to={`/piacok/${market.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MarketCard
                        style={{ textDecoration: "none" }}
                        profilePic={market.profilePic}
                        marketName={market.name}
                        marketLocation={market.place}
                        marketOpeningDate={market.openingDate}
                        marketClosingDate={market.closingDate}
                        vendorsAmount={market.numberOfVendors}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <p className="empty-page-message">Nincs megjeleníthető piac</p>
            )}
          </div>
        </div>
      ) : (
        <div className="profile-components">
          <Products products={products} />
          <VendorContacts
            facebook={facebook}
            instagram={instagram}
            website={website}
            email={email}
            phone={phone}
          />
          <VendorIntroduction introductionLong={introductionLong} />
        </div>
      )}
    </>
  );
};
export default VendorInfoNav;
