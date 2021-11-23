import defaultMarketImage from "../defaultMarketImage.png";
import { Helmet } from "react-helmet";
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

const MarketName = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
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
  padding-top: 20px;
`;

const MarketLocationAndDate = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  overflow-wrap: break-word;
`;

const ParallelDateAndHour = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const StartAndEndHours = styled.div`
  font-size: 18px;
  padding-left: 5px;
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
      <Helmet>
        <title>Félpénzzel - {marketName}</title>
        <meta
          name="description"
          content={`${marketLocation} - ${formattedYearMonthAndDay} ${formattedOpeningAndClosingHour}`}
        ></meta>
      </Helmet>
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
        <MarketName>{marketName}</MarketName>
        <MarketLocationAndDate>
          <div>{marketLocation}</div>
          <ParallelDateAndHour>
            <div>{formattedYearMonthAndDay}</div>
            <StartAndEndHours>
              {formattedOpeningAndClosingHour}
            </StartAndEndHours>
          </ParallelDateAndHour>
        </MarketLocationAndDate>
      </TopMarketInfo>
    </>
  );
};

export default MarketInfo;
