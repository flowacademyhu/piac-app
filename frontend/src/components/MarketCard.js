const card = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto 1fr auto',
  cursor: 'pointer',
  userSelect: 'none',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px',
  marginTop: '30px',
  paddingTop: '20px',
  paddingBottom: '20px',
  backgroundColor: 'white',
  width: '95%',
  margin: 'auto',
  minWidth: '480px'
};

const picture = {
  height: '110px',
  borderRadius: '80px',
  gridColumn: '1',
  gridRowStart: '1',
  gridRowEnd: '4',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'lightgrey',
  alignSelf: 'center',
  margin: 'auto'
};

const marketName = {
  gridColumn: '2',
  gridRow: '1',
  fontFamily: 'Open Sans, sansSerif',
  fontSize: '20px',
  fontWeight: 'bold',
  overflowWrap: 'break-word'
};

const marketLocationAndDate = {
  gridColumn: '2',
  gridRow: '2',
  fontFamily: 'Open Sans, sansSerif',
  fontSize: '12px',
  overflowWrap: 'break-word'
};

const vendorNumber = {
  gridColumn: '2',
  gridRow: '3',
  fontFamily: 'Open Sans, sansSerif',
  fontSize: '12px',
  overflowWrap: 'break-word'
};

const body = document.body;
body.style.background = '#F7F5F2';

const emptySpaceOnTop = {
  marginTop: '30px'
};

const parallelDateAndHour = {
  display: 'flex',
  alignItems: 'baseline'
};

const startAndEndHours = {
  fontSize: '10px'
};

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
      <div style={emptySpaceOnTop} />
      <div style={card}>
        <img style={picture} src={imageLogo} alt="logo" />
        <div div style={marketName}>
          {title}
        </div>
        <div div style={marketLocationAndDate}>
          <div>{location}</div>
          <div style={parallelDateAndHour}>
            <div>{date}</div>
            <div style={startAndEndHours}>{lat}</div>
          </div>
        </div>
        <div div style={vendorNumber}>
          {vendorsAmount}
        </div>
      </div>
    </>
  );
};

export default MarketCard;
