import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import MarketLogo from "../icons/navigation/calendar-gray.svg";
import VendorLogo from "../icons/navigation/vendor-dark-gray.svg";

const Header = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/"
          ? "header market-header"
          : "header vendor-header"
      }
    >
      {location.pathname === "/" ? (
        <div>
          <div className="MarketLogoContainer">
            <img className="Logo" src={MarketLogo} alt="Logo" />
          </div>
          <div className="Markets">Piacok</div>
        </div>
      ) : (
        <div>
          <div className="MarketLogoContainer">
            <img className="Logo" src={VendorLogo} alt="Logo" />
          </div>
          <div className="Vendors">Árusok</div>
        </div>
      )}
    </div>
  );
};

export default Header;
