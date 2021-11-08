import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './VendorInfoNav.css';
import info_mid from './../icons/navigation/info_mid.svg';
import info_primary from './../icons/navigation/info_primary.svg';
import market_mid from './../icons/navigation/market_mid.svg';
import market_primary from './../icons/navigation/market_primary.svg';
import '../styles/MarketCardList.css';

const VendorInfoNav = ({ vendorId, showMarkets }) => {
  const [status, changeStatus] = useState(!showMarkets);

  return (
    <>
      <div className="icons">
        <Router>
          <div className="info-icon">
            <Link
              activeClassName={`${showMarkets ? '' : 'active'}`}
              to={`/arusok/${vendorId}`}
            >
              <div
                className={'image ' + (status ? 'active-page' : null)}
                onClick={() => changeStatus(true)}
              >
                <img src={status ? info_primary : info_mid} alt="info" />
              </div>
            </Link>
          </div>
          <div className="vendor-icon">
            <Link to={`/arusok/${vendorId}/piacok`}>
              <div
                className={'image ' + (status ? null : 'active-page')}
                onClick={() => changeStatus(false)}
              >
                <img src={status ? market_mid : market_primary} alt="market" />
              </div>
            </Link>
          </div>
        </Router>
      </div>
    </>
  );
};
export default VendorInfoNav;
