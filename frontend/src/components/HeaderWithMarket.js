import MarketInfo from './MarketInfo';

const HeaderWithMarket = ({
  profilePic,
  marketName,
  marketLocation,
  marketOpeningDate,
  marketClosingDate
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
    <div className="marketHeader">
      <MarketInfo
        profilePic={profilePic}
        marketName={marketName}
        marketLocation={marketLocation}
        formattedYearMonthAndDay={formattedYearMonthAndDay}
        formattedOpeningAndClosingHour={formattedOpeningAndClosingHour}
      />
    </div>
  );
};

export default HeaderWithMarket;
