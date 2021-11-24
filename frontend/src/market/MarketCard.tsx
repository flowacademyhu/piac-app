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

interface MarketCardProps {
  marketName: string;
  marketLocation: string;
  marketOpeningDate: number;
  marketClosingDate: number;
  vendorsAmount: number;
  profilePic?: string;
}

const MarketCard = ({
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  vendorsAmount,
  profilePic,
}: MarketCardProps) => {
  return (
    <MarketCardContainer data-test="market-card">
      <MarketInfoList
        picture={profilePic}
        name={marketName}
        location={marketLocation}
        openingDate={marketOpeningDate}
        closingDate={marketClosingDate}
        vendorsAmount={vendorsAmount}
      />
    </MarketCardContainer>
  );
};

export default MarketCard;
