import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import MarketLogo from "../icons/navigation/calendar-dark-gray.svg";
import VendorLogo from "../icons/navigation/vendor-dark-gray.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-position: center;
  position: relative;
  top: 0;
  font-family: "Amatic SC", sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: #33221a;
  z-index: 1;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Logo = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
`;

const LogoContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ffffff;
`;

const Header = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HeaderContainer>
            <LogoContainer>
              <Logo src={MarketLogo} alt="Logo" />
            </LogoContainer>
            <div>Piacok</div>
          </HeaderContainer>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/arusok">
          <HeaderContainer>
            <LogoContainer>
              <Logo src={VendorLogo} alt="Logo" />
            </LogoContainer>
            <div>Árusok</div>
          </HeaderContainer>
        </Route>
      </Switch>
    </div>
  );
};
export default Header;
