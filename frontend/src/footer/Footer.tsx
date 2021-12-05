import styled from "styled-components";
import FooterButton from "./FooterButton";

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
      <FooterButton path="/" label="PIACOK" logo="market" />
      <FooterButton path="/arusok" label="ÁRUSOK" logo="vendor" />
    </FooterContainer>
  );
};

export default Footer;
