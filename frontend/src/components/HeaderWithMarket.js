import MarketInfo from "./MarketInfo";

const HeaderWithMarket = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
}) => {
  return (
    <div className="marketHeader">
      <MarketInfo
        header
        marketHeaderLogoStyle
        profilePic={profilePic}
        marketName={marketName}
        marketLocation={marketLocation}
        marketOpeningDate={marketOpeningDate}
        marketClosingDate={marketClosingDate}
      />
    </div>
  );
};

export default HeaderWithMarket;
