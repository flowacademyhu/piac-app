import defaultMarketImage from "./defaultMarketImage.png";
import styled from "styled-components";

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

const MarketListHours = styled.div`
  font-size: 12px;
  padding-top: 10px;
`;

const MarketListLogo = styled.div`
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

const MarketListNameAndLocation = styled.div`
  grid-row: 1;
  grid-column: 2;
  padding-left: 10px;
  line-height: 2;
`;

const MarketListName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  width: 100%;
  max-height: 60px;
  white-space: normal;
  word-break: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin-bottom: 0;
`;

const MarketListLocation = styled.div`
  font-size: 12px;
  overflow-wrap: break-word;
`;

const MarketListVendorNumber = styled.div`
  grid-row: 2;
  grid-column: 2;
  font-size: 12px;
  overflow-wrap: break-word;
  padding: 10px 0px 0px 10px;
`;

const monthFormat = new Intl.DateTimeFormat("hu-HU", {
  month: "short",
});

const dayDigitsFormat = new Intl.DateTimeFormat("hu-HU", {
  day: "2-digit",
});

const weekdayFormat = new Intl.DateTimeFormat("hu-HU", {
  weekday: "long",
});

const minuteFormat = new Intl.DateTimeFormat("hu-HU", {
  hour: "2-digit",
  minute: "numeric",
});

interface MarketInfoListProps {
  profilePic?: string;
  marketName: string;
  marketLocation: string;
  marketOpeningDate: number;
  marketClosingDate: number;
  vendorsAmount: number;
}

const MarketInfoList = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  vendorsAmount,
}: MarketInfoListProps) => {
  const formattedMonth = monthFormat
    .format(marketOpeningDate * 1000)
    .substring(0, 3);

  const formattedDayDigits = dayDigitsFormat.format(marketOpeningDate * 1000);

  const formattedWeekdays = weekdayFormat.format(marketOpeningDate * 1000);

  const formattedOpeningHourAndMinute = minuteFormat.format(
    marketOpeningDate * 1000
  );

  const formattedClosingHourAndMinute = minuteFormat.format(
    marketClosingDate * 1000
  );

  const formattedOpeningAndClosingHour =
    formattedOpeningHourAndMinute + " - " + formattedClosingHourAndMinute;

  return (
    <>
      <DateContainer>
        <DateFirstRow>{formattedMonth}</DateFirstRow>
        <DateSecondRow>{formattedDayDigits}</DateSecondRow>
        <DateThirdRow>{formattedWeekdays}</DateThirdRow>
      </DateContainer>
      <MarketListHours>{formattedOpeningAndClosingHour}</MarketListHours>
      <MarketListLogo
        style={
          profilePic
            ? {
                backgroundImage: `url(${profilePic})`,
              }
            : {
                backgroundImage: `url(${defaultMarketImage})`,
              }
        }
      />
      <MarketListNameAndLocation>
        <MarketListName>{marketName}</MarketListName>
        <MarketListLocation>{marketLocation}</MarketListLocation>
      </MarketListNameAndLocation>
      <MarketListVendorNumber>
        {vendorsAmount === 0 ? "Szervezés alatt..." : `${vendorsAmount} árus`}
      </MarketListVendorNumber>
    </>
  );
};

export default MarketInfoList;
