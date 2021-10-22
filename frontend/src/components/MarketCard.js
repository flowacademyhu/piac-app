import '../styles/MarketCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const MarketCard = ({
  marketName,
  marketLocation,
  marketDateYearMonthDay,
  marketDateHours,
  vendorsAmount,
  imageLogo,
  lat
}) => {
  return (
    <div className="marketCard">
      <img className="marketLogo" src={imageLogo} alt="logo" />
      <div div className="marketName">
        {marketName}
      </div>
      <div div className="marketLocationAndDate">
        <div>{marketLocation}</div>
        <div className="parallelDateAndHour">
          <div>{marketDateYearMonthDay}</div>
          <div className="startAndEndHours">{marketDateHours}</div>
        </div>
      </div>
      <div div className="vendorNumber">
        {vendorsAmount}
      </div>
    </div>
  );
};

export default MarketCard;
