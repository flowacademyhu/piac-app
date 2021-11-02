const MarketInfo = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate,
  header
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
    <>
      <div
        className={header ? 'marketLogo headerLogo' : 'marketLogo cardLogo'}
        style={
          profilePic
            ? {
                backgroundImage: `url(${profilePic})`
              }
            : {}
        }
      ></div>
      <div className='topMarketInfo'>
        <div className='marketName'>{marketName}</div>
        <div className='marketLocationAndDate'>
          <div>{marketLocation}</div>
          <div className='parallelDateAndHour'>
            <div>{formattedYearMonthAndDay}</div>
            <div className='startAndEndHours'>
              {formattedOpeningAndClosingHour}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketInfo;
