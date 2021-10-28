import '../styles/MarketCard.css';

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
  const marketOpeningDateFormatter = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const marketMinuteFormatter = {
    hour: '2-digit',
    minute: 'numeric'
  };

  const formattedYearMonthAndDay = new Intl.DateTimeFormat(
    'hu-HU',
    marketOpeningDateFormatter
  ).format(new Date(marketOpeningDate * 1000));

  const formattedOpeningHourAndMinute = new Intl.DateTimeFormat(
    'hu-HU',
    marketMinuteFormatter
  ).format(new Date(marketOpeningDate * 1000));

  const formattedClosingHourAndMinute = new Intl.DateTimeFormat(
    'hu-HU',
    marketMinuteFormatter
  ).format(new Date(marketClosingDate * 1000));

  const formattedOpeningAndClosingHour =
    formattedOpeningHourAndMinute + ' - ' + formattedClosingHourAndMinute;

  return (
    <div className="marketCard">
      <img className="marketLogo" src={profilePic} alt="logo" />
      <div className="topMarketInfo">
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
      </div>
      <div className="vendorNumber">{vendorsAmount} árus</div>
    </div>
  );
};

export default MarketCard;
