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
        <div className="date-firstRow">{formattedMonth}</div>
        <div className="date-secondRow">{formattedDayDigits}</div>
        <div className="date-thirdRow">{formattedWeekdays}</div>
      </DateContainer>
      <div className="marketList-hours">{formattedOpeningAndClosingHour}</div>
      <div
        className={
          header
            ? "marketListLogo marketList-headerLogo"
            : "marketListLogo marketList-cardLogo"
        }
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
      <div className="marketList-nameAndLocation">
        <div className="marketList-name">{marketName}</div>
        <div className="marketList-location">{marketLocation}</div>
      </div>
      <div className="marketList-vendorNumber">
        {vendorsAmount === 0 ? "Szervezés alatt..." : `${vendorsAmount} árus`}
      </div>
    </>
  );
};

export default MarketInfoList;
