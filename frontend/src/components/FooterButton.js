import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import MarketLogo from "../icons/navigation/calendar-gray.svg";
import MarketLogoHighlight from "../icons/navigation/calendar-primary.svg";
import VendorLogo from "../icons/navigation/vendor-gray.svg";
import VendorLogoHighlight from "../icons/navigation/vendor-primary.svg";
import "./Footer.css";

const FooterButton = ({ requestParam, appelation, logo }) => {
  const location = useLocation();

  return (
    <Col>
      <Link className="footer-link" to={requestParam}>
        <img
          className="footer-logo"
          src={
            location.pathname === requestParam
              ? logo === "market"
                ? MarketLogoHighlight
                : VendorLogoHighlight
              : logo === "market"
              ? MarketLogo
              : VendorLogo
          }
          alt="Icon"
        />
        <div
          style={{ cursor: "default" }}
          className={
            location.pathname === requestParam
              ? "footer-label active"
              : "footer-label"
          }
        >
          {appelation}
        </div>
      </Link>
    </Col>
  );
};

export default FooterButton;
