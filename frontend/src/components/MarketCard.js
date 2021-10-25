import '../styles/MarketCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const MarketCard = ({
  marketName,
  marketLocation,
  marketDateYearMonthDay,
  marketDateHours,
  vendorsAmount,
  profilePic
}) => {
  return (
    <div className="marketCard">
      <img className="marketLogo" src={profilePic} alt="logo" />
      <div className="marketName">{marketName}</div>
      <div className="marketLocationAndDate">
        <div>{marketLocation}</div>
        <div className="parallelDateAndHour">
          <div>{marketDateYearMonthDay}</div>
          <div className="startAndEndHours">{' ' + marketDateHours}</div>
        </div>
      </div>
      <div className="vendorNumber">{vendorsAmount} árus</div>
    </div>
  );
};

export default MarketCard;
