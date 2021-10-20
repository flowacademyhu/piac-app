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

const VendorInfoNav = ({ products }) => {
  const [info, changeInfo] = useState(true);
  const [market, changeMarket] = useState(false);

  const handleInfo = () => {
    changeInfo(true);
    changeMarket(false);
  };

  const handleMarket = () => {
    changeMarket(true);
    changeInfo(false);
  };

  return (
    <div className="Icons">
      <Router>
        <div className="Info-Icon">
          <NavLink activeClassName="active" to="/info">
            <div
              style={info ? { borderBottom: '2px solid #cc4400' } : null}
              className="Image"
              onClick={handleInfo}
            >
              <img src={info ? info_primary : info_mid} alt="info_mid" />
            </div>
          </NavLink>
        </div>
        <div className="Vendor-Icon">
          <NavLink to="/market">
            <div
              style={market ? { borderBottom: '2px solid #cc4400' } : null}
              className="Image"
              onClick={handleMarket}
            >
              <img
                src={market ? market_primary : market_mid}
                alt="market_mid"
              />
            </div>
          </NavLink>
        </div>
        <Switch>
          <Route path="/info">
            <Products products={products} />
          </Route>
          <Route path="/market"></Route>
        </Switch>
      </Router>
    </div>
  );
};
export default VendorInfoNav;
