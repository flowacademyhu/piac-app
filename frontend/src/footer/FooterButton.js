import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import MarketLogo from "../icons/navigation/calendar-gray.svg";
import MarketLogoHighlight from "../icons/navigation/calendar-primary.svg";
import VendorLogo from "../icons/navigation/vendor-gray.svg";
import VendorLogoHighlight from "../icons/navigation/vendor-primary.svg";
import "./Footer.css";
import styled from "styled-components";

const FooterButton = ({ requestParam, appelation, logo }) => {
  const location = useLocation();

  const FooterLabel = styled.div`
    font-family: "Bebas Neue", sans-serif;
    font-size: 18px;
    color: #ccbeb8;
    text-decoration: none;
    outline-style: none;
    display: flex;
    justify-content: center;
  `;

  const FooterLabelActive = styled(FooterLabel)`
    color: #53b896;
  `;

  const FooterLogo = styled.div`
    height: 25px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto;
  `;

  const IsActive =
    location.pathname === requestParam ? FooterLabelActive : FooterLabel;

  return (
    <Link
      className="footer-link"
      to={requestParam}
      style={{ textDecoration: "none", textAlign: "center" }}
    >
      <FooterLogo>
        <img
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
      </FooterLogo>
      <IsActive style={{ cursor: "default" }}>{appelation}</IsActive>
    </Link>
  );
};

export default FooterButton;
