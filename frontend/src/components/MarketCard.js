import './MarketCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const MarketCard = ({
  title,
  location,
  date,
  vendorsAmount,
  imageLogo,
  lat
}) => {
  return (
    <>
      <div className="emptySpaceOnTop" />
      <div className="marketCard">
        <img className="marketLogo" src={imageLogo} alt="logo" />
        <div div className="marketName">
          {title}
        </div>
        <div div className="marketLocationAndDate">
          <div>{location}</div>
          <div className="parallelDateAndHour">
            <div>{date}</div>
            <div className="startAndEndHours">{lat}</div>
          </div>
        </div>
        <div div className="vendorNumber">
          {vendorsAmount}
        </div>
      </div>
    </>
  );
};

export default MarketCard;
