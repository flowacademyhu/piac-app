import MarketInfo from "./MarketInfo";
import "./MarketCard.css";
import styled from "styled-components";

const MarketHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-template-columns: auto 1fr;
  grid-template-rows: max-content;
  user-select: none;
  padding: 20px 20px 0px 20px;
  background-color: #f7f5f2;
  width: 100%;
  color: #33221a;
`;

const HeaderWithMarket = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
}) => {
  return (
    <MarketHeader>
      <MarketInfo
        header
        marketHeaderLogoStyle
        profilePic={profilePic}
        marketName={marketName}
        marketLocation={marketLocation}
        marketOpeningDate={marketOpeningDate}
        marketClosingDate={marketClosingDate}
      />
    </MarketHeader>
  );
};

export default HeaderWithMarket;
