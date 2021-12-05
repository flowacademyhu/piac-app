import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MarketLogo from "../icons/navigation/calendar-gray.svg";
import MarketLogoHighlight from "../icons/navigation/calendar-primary.svg";
import VendorLogo from "../icons/navigation/vendor-gray.svg";
import VendorLogoHighlight from "../icons/navigation/vendor-primary.svg";
import styled from "styled-components";

interface FooterLabelProps {
  active: boolean;
}

const FooterLabel = styled.div<FooterLabelProps>`
  font-family: "Bebas Neue", sans-serif;
  font-size: 18px;
  color: ${(props) => (props.active ? "#53b896" : "#ccbeb8")};
  text-decoration: none;
  outline-style: none;
  display: flex;
  justify-content: center;
`;

const FooterLogo = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  text-decoration: none;
  text-align: center;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

interface FooterButtonProps {
  path: string;
  label: string;
  logo: string;
}

const FooterButton = ({ path, label, logo }: FooterButtonProps) => {
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <NavLink to={path}>
      <FooterLogo>
        <img
          src={
            isActive
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
      <FooterLabel active={isActive} style={{ cursor: "default" }}>
        {label}
      </FooterLabel>
    </NavLink>
  );
};

export default FooterButton;
