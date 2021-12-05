import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
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
  text-transform: uppercase;
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
  icon: string;
  iconActive: string;
}

const FooterButton = ({ path, label, icon, iconActive }: FooterButtonProps) => {
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <NavLink to={path}>
      <FooterLogo>
        <img src={isActive ? iconActive : icon} alt="Icon" />
      </FooterLogo>
      <FooterLabel active={isActive} style={{ cursor: "default" }}>
        {label}
      </FooterLabel>
    </NavLink>
  );
};

export default FooterButton;
