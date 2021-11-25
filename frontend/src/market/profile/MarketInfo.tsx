import defaultMarketImage from "../defaultMarketImage.png";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { getDate, getTimeRange } from "../../time/formatters";

const MarketLogo = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const TopMarketInfo = styled.div`
  grid-column: 2;
  grid-row: 1;
  position: "relative";
  overflow: hidden;
`;

const MarketName = styled.h1`
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
  margin-bottom: 0;
`;

const MarketLocationAndDate = styled.h2`
  font-size: 18px;
  overflow-wrap: break-word;
  line-height: 30px;
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

interface MarketInfoProps {
  profilePic: string;
  marketName: string;
  marketLocation: string;
  marketOpeningDate: number;
  marketClosingDate: number;
}

const MarketInfo = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
}: MarketInfoProps) => {
  const date = getDate(marketOpeningDate);
  const openTimeRange = getTimeRange(marketOpeningDate, marketClosingDate);

  return (
    <>
      <Helmet>
        <title>Félpénzzel - {marketName}</title>
        <meta
          name="description"
          content={`${marketLocation} - ${date} ${openTimeRange}`}
        ></meta>
      </Helmet>
      <MarketLogo
        style={{
          backgroundImage: profilePic
            ? `url(${profilePic})`
            : `url(${defaultMarketImage})`,
        }}
      />
      <TopMarketInfo>
        <MarketName>{marketName}</MarketName>
        <MarketLocationAndDate>
          <div>{marketLocation}</div>
          <ParallelDateAndHour>
            <div>{date}</div>
            <StartAndEndHours>{openTimeRange}</StartAndEndHours>
          </ParallelDateAndHour>
        </MarketLocationAndDate>
      </TopMarketInfo>
    </>
  );
};

export default MarketInfo;
