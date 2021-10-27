import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';
import './VendorInfoNav.css';
import Products from './Products';
import info_mid from './../icons/navigation/info_mid.svg';
import info_primary from './../icons/navigation/info_primary.svg';
import market_mid from './../icons/navigation/market_mid.svg';
import market_primary from './../icons/navigation/market_primary.svg';

import VendorContacts from './VendorContacts';
import VendorIntroduction from './VendorIntroduction';

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
  const [status, changeStatus] = useState(true);

  return (
    <Router>
      <div className="icons">
        <div className="info-icon">
          <NavLink activeClassName="active" to={`/arusok/${vendorId}`}>
            <div
              className={'image ' + (status ? 'active-page' : null)}
              onClick={() => changeStatus(true)}
            >
              <img src={status ? info_primary : info_mid} alt="info" />
            </div>
          </NavLink>
        </div>
        <div className="vendor-icon">
          <NavLink to={`/arusok/${vendorId}/piacok`}>
            <div
              className={'image ' + (status ? null : 'active-page')}
              onClick={() => changeStatus(false)}
            >
              <img src={status ? market_mid : market_primary} alt="market" />
            </div>
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/arusprofil">
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
        </Route>
        <Route path="/markets">
          <div className="profile-components empty-page-message">
            <div>Hamarosan...</div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
export default VendorInfoNav;
