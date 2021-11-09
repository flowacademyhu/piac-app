import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import MarketLogo from "../icons/navigation/calendar-gray.svg";
import VendorLogo from "../icons/navigation/vendor-dark-gray.svg";
import "./Header.css";

const Header = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="Header">
            <div className="MarketLogoContainer">
              <img className="Logo" src={MarketLogo} alt="Logo" />
            </div>
            <div className="Markets">Piacok</div>
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/arusok">
          <div className="Header">
            <div className="MarketLogoContainer">
              <img className="Logo" src={VendorLogo} alt="Logo" />
            </div>
            <div className="Vendors">Árusok</div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
export default Header;
