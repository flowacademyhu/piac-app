import "../styles/MarketInfoList.css";
import MarketInfoList from "./MarketInfoList";

const body = document.body;
body.style.background = "#F7F5F2";

const MarketCard = ({
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  vendorsAmount,
  profilePic,
}) => {
  return (
    <div className="marketCard">
      <MarketInfoList
        profilePic={profilePic}
        marketName={marketName}
        marketLocation={marketLocation}
        marketOpeningDate={marketOpeningDate}
        marketClosingDate={marketClosingDate}
        vendorsAmount={vendorsAmount}
      />
    </div>
  );
};

export default MarketCard;
