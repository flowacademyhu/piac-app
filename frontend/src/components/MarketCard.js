import '../styles/MarketCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const months = [
  'január',
  'február',
  'március',
  'április',
  'május',
  'június',
  'július',
  'augusztus',
  'szeptember',
  'október',
  'november',
  'december'
];

const MarketCard = ({
  marketName,
  marketLocation,
  marketDates,
  vendorsAmount,
  profilePic
}) => {
  const newMarketDate = '' + marketDates;

  const year = newMarketDate.substring(0, 4);
  const month = newMarketDate.substring(4, 6) - 1;
  const day = newMarketDate.substring(6, 8);
  const marketStartHour = newMarketDate.substring(8, 10);
  const marketStartMinute = newMarketDate.substring(10, 12);
  const marketEndHour = newMarketDate.substring(12, 14);
  const marketEndMinute = newMarketDate.substring(14, 16);

  return (
    <div className="marketCard">
      <img className="marketLogo" src={profilePic} alt="logo" />
      <div className="topMarketInfo">
        <div className="marketName">{marketName}</div>
        <div className="marketLocationAndDate">
          <div>{marketLocation}</div>
          <div className="parallelDateAndHour">
            <div>{year + '. ' + months[month] + ' ' + day + '.'}</div>
            <div className="startAndEndHours">
              {marketStartHour +
                ':' +
                marketStartMinute +
                ' - ' +
                marketEndHour +
                ':' +
                marketEndMinute}
            </div>
          </div>
        </div>
      </div>
      <div className="vendorNumber">{vendorsAmount} árus</div>
    </div>
  );
};

export default MarketCard;
