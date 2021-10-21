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
  products,
  facebook,
  instagram,
  website,
  email,
  phone,
  introduction
}) => {
  const [status, changeStatus] = useState(true);

  return (
    <div className="Icons">
      <Router>
        <div className="Info-Icon">
          <NavLink activeClassName="active" to="/profile">
            <div
              className={'Image ' + (status ? 'Active-Page' : null)}
              onClick={() => changeStatus(true)}
            >
              <img src={status ? info_primary : info_mid} alt="info" />
            </div>
          </NavLink>
        </div>
        <div className="Vendor-Icon">
          <NavLink to="/markets">
            <div
              className={'Image ' + (status ? null : 'Active-Page')}
              onClick={() => changeStatus(false)}
            >
              <img src={status ? market_mid : market_primary} alt="market" />
            </div>
          </NavLink>
        </div>
        <Switch>
          <Route path="/profile">
            <Products products={products} />
            <VendorContacts
              facebook={facebook}
              instagram={instagram}
              website={website}
              email={email}
              phone={phone}
              introduction={introduction}
            />
            <VendorIntroduction introduction={introduction} />
          </Route>
          <Route path="/markets">
            <div
              style={{
                textAlign: 'center',
                paddingTop: '10px'
              }}
            >
              <div>Hamarosan...</div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default VendorInfoNav;
