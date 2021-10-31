import MarketInfo from './MarketInfo';

const HeaderWithMarket = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate
}) => {
  return (
    <div className="marketHeader">
      <MarketInfo
        marketHeaderStyle={{ height: '80px' }}
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
