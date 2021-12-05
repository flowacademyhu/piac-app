import styled from "styled-components";
import FooterButton from "./FooterButton";
import marketLogo from "../icons/navigation/calendar-gray.svg";
import marketLogoHighlight from "../icons/navigation/calendar-primary.svg";
import vendorLogo from "../icons/navigation/vendor-gray.svg";
import vendorLogoHighlight from "../icons/navigation/vendor-primary.svg";

const FooterContainer = styled.div`
  text-decoration: none;
  background-color: #fffdfc;
  position: fixed;
  vertical-align: middle;
  bottom: 0;
  width: 100%;
  border-top: solid;
  border-color: #53b896;
  border-width: 0.5px;
  border-top-width: 2px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterButton
        path="/"
        label="PIACOK"
        logo={marketLogo}
        logoActive={marketLogoHighlight}
      />
      <FooterButton
        path="/arusok"
        label="ÁRUSOK"
        logo={vendorLogo}
        logoActive={vendorLogoHighlight}
      />
    </FooterContainer>
  );
};

export default Footer;
