import '../styles/MarketCard.css';
import MarketInfo from './MarketInfo';

const body = document.body;
body.style.background = '#F7F5F2';

const MarketCard = ({
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  vendorsAmount,
  profilePic
}) => {
  return (
    <div className='marketCard'>
      <MarketInfo
        profilePic={profilePic}
        marketName={marketName}
        marketLocation={marketLocation}
        marketOpeningDate={marketOpeningDate}
        marketClosingDate={marketClosingDate}
      />
      <div className='vendorNumber'>{vendorsAmount} árus</div>
    </div>
  );
};

export default MarketCard;
