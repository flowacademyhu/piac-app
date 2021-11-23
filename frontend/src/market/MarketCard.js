import MarketInfoList from "./MarketInfoList";
import styled from "styled-components";

const MarketCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1f auto;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding: 10px;
  background-color: #fffdfc;
  width: 100%;
  position: relative;
`;

const MarketCard = ({
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  vendorsAmount,
  profilePic,
}) => {
  return (
    <MarketCardContainer>
      <MarketInfoList
        profilePic={profilePic}
        marketName={marketName}
        marketLocation={marketLocation}
        marketOpeningDate={marketOpeningDate}
        marketClosingDate={marketClosingDate}
        vendorsAmount={vendorsAmount}
      />
    </MarketCardContainer>
  );
};

export default MarketCard;
