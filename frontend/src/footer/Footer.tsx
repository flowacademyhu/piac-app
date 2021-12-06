import styled from "styled-components";
import FooterButton from "./FooterButton";
import marketIcon from "../icons/navigation/calendar-gray.svg";
import marketIconHighlight from "../icons/navigation/calendar-primary.svg";
import vendorIcon from "../icons/navigation/vendor-gray.svg";
import vendorIconHighlight from "../icons/navigation/vendor-primary.svg";

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
        label="Piacok"
        icon={marketIcon}
        iconActive={marketIconHighlight}
      />
      <FooterButton
        path="/arusok"
        label="Árusok"
        icon={vendorIcon}
        iconActive={vendorIconHighlight}
      />
    </FooterContainer>
  );
};

export default Footer;
