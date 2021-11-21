import defaultMarketImage from "../defaultMarketImage.png";
import styled from "styled-components";

const MarketLogo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const HeaderLogo = styled(MarketLogo)`
  height: 80px;
  width: 80px;
`;

const CardLogo = styled(MarketLogo)`
  height: 110px;
`;

const TopMarketInfo = styled.div`
  grid-column: 2;
  grid-row: 1;
  position: "relative";
  overflow: hidden;
`;

const MarketInfo = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  header,
}) => {
  const marketOpeningDateFormatter = {
    month: "long",
    day: "numeric",
  };

  const marketMinuteFormatter = {
    hour: "2-digit",
    minute: "numeric",
  };

  const HeaderLogoOrCardLogo = header ? HeaderLogo : CardLogo;

  const formattedYearMonthAndDay = new Intl.DateTimeFormat(
    "hu-HU",
    marketOpeningDateFormatter
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
      <HeaderLogoOrCardLogo
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
      <TopMarketInfo>
        <div className="marketName">{marketName}</div>
        <div className="marketLocationAndDate">
          <div>{marketLocation}</div>
          <div className="parallelDateAndHour">
            <div>{formattedYearMonthAndDay}</div>
            <div className="startAndEndHours">
              {formattedOpeningAndClosingHour}
            </div>
          </div>
        </div>
      </TopMarketInfo>
    </>
  );
};

export default MarketInfo;
