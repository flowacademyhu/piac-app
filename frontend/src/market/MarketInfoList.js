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

const MarketListHeaderLogo = styled(MarketListLogo)`
  height: 80px;
  width: 80px;
`;

const MarketListCardLogo = styled(MarketListLogo)`
  height: 110px;
`;

const MarketListNameAndLocation = styled.div`
  grid-row: 1;
  grid-column: 2;
  padding-left: 10px;
`;

const MarketListName = styled.div`
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
`;

const MarketListLocation = styled.div`
  font-size: 12px;
  overflow-wrap: break-word;
`;

const MarketInfoList = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  header,
  vendorsAmount,
}) => {
  const marketMonthFormatter = {
    month: "short",
  };

  const marketDayDigitsFormatter = {
    day: "2-digit",
  };

  const marketMinuteFormatter = {
    hour: "2-digit",
    minute: "numeric",
  };

  const marketWeekdayFormatter = {
    weekday: "long",
  };

  const MarketListHeaderLogoOrMarketListCardLogo = header
    ? MarketListHeaderLogo
    : MarketListCardLogo;

  const formattedMonth = new Intl.DateTimeFormat("hu-HU", marketMonthFormatter)
    .format(new Date(marketOpeningDate * 1000))
    .substring(0, 3);

  const formattedDayDigits = new Intl.DateTimeFormat(
    "hu-HU",
    marketDayDigitsFormatter
  ).format(new Date(marketOpeningDate * 1000));

  const formattedWeekdays = new Intl.DateTimeFormat(
    "hu-HU",
    marketWeekdayFormatter
  ).format(new Date(marketOpeningDate * 1000));

  const formattedOpeningHourAndMinute = new Intl.DateTimeFormat(
    "hu-HU",
    marketMinuteFormatter
  ).format(new Date(marketOpeningDate * 1000));

  const formattedClosingHourAndMinute = new Intl.DateTimeFormat(
    "hu-HU",
    marketMinuteFormatter
  ).format(new Date(marketClosingDate * 1000));

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
      <MarketListHeaderLogoOrMarketListCardLogo
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
      <div className="marketList-vendorNumber">
        {vendorsAmount === 0 ? "Szervezés alatt..." : `${vendorsAmount} árus`}
      </div>
    </>
  );
};

export default MarketInfoList;
