import defaultMarketImage from "./defaultMarketImage.png";
import styled from "styled-components";
import {
  getDayDigits,
  getMonth,
  getWeekday,
  getTimeRange,
} from "../time/formatters";

const DateContainer = styled.div`
  height: 60px;
  width: 70px;
  border-radius: 5px;
  grid-column: 1;
  grid-row: 1;
  background-color: #ccbeb8;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const DateFirstRow = styled.div`
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
`;

const DateSecondRow = styled.div`
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
`;

const DateThirdRow = styled.div`
  font-size: 10px;
  line-height: 10px;
  text-transform: uppercase;
`;

const Hours = styled.div`
  font-size: 12px;
  padding-top: 10px;
`;

const Logo = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  grid-column: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const NameAndLocation = styled.div`
  grid-row: 1;
  grid-column: 2;
  padding-left: 10px;
  line-height: 2;
`;

const Name = styled.h4`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  width: 100%;
  white-space: normal;
  word-break: break-word;
  text-overflow: ellipsis;
  margin-bottom: 0;
`;

const Location = styled.div`
  font-size: 12px;
  overflow-wrap: break-word;
`;

const VendorNumber = styled.div`
  grid-row: 2;
  grid-column: 2;
  font-size: 12px;
  overflow-wrap: break-word;
  padding: 10px 0px 0px 10px;
`;
interface MarketCardInfoProps {
  picture?: string;
  name: string;
  location: string;
  openingDate: number;
  closingDate: number;
  vendorsAmount: number;
}

const MarketCardInfo = ({
  picture,
  name,
  location,
  openingDate,
  closingDate,
  vendorsAmount,
}: MarketCardInfoProps) => {
  return (
    <>
      <DateContainer>
        <DateFirstRow>{getMonth(openingDate)}</DateFirstRow>
        <DateSecondRow>{getDayDigits(openingDate)}</DateSecondRow>
        <DateThirdRow>{getWeekday(openingDate)}</DateThirdRow>
      </DateContainer>
      <Hours>{getTimeRange(openingDate, closingDate)}</Hours>
      <Logo
        style={
          picture
            ? {
                backgroundImage: `url(${picture})`,
              }
            : {
                backgroundImage: `url(${defaultMarketImage})`,
              }
        }
      />
      <NameAndLocation>
        <Name>{name}</Name>
        <Location>{location}</Location>
      </NameAndLocation>
      <VendorNumber>
        {vendorsAmount === 0 ? "Szervezés alatt..." : `${vendorsAmount} árus`}
      </VendorNumber>
    </>
  );
};

export default MarketCardInfo;
