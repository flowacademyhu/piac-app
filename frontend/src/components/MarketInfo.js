const MarketInfo = ({
  profilePic,
  marketName,
  marketLocation,
  formattedYearMonthAndDay,
  formattedOpeningAndClosingHour
}) => {
  return (
    <>
      <img className='marketLogo' src={profilePic} alt='logo' />
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
