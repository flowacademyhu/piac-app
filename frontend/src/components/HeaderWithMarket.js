const HeaderWithMarket = (props) => {
  const { profilePic, name, place, date } = props;
  return (
    <div className='marketHeader'>
      <img className='marketLogo' src={profilePic} alt='logo' />
      <div className='marketDescribe'>
        <div className='marketName'>{name}</div>
        <div className='marketLocationAndDate'>
          <div>{place}</div>
          <div className='parallelDateAndHour'>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithMarket;
