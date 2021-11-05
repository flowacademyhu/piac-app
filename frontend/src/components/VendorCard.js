import '../styles/VendorCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const VendorCard = ({ vendor, vendorDesc, imageLogo }) => {
  return (
    <div className='vendorCard'>
      
      <div
        className='vendorLogo'
        style={
          imageLogo
            ? {
                backgroundImage: `url(${imageLogo})`
              }
            : {}
        }
      ></div>
      <div className='vendorInfo'>
      <div className='vendorName'>{vendor}</div>
      <div className='vendorDescription'>{vendorDesc}</div>
      </div>
    </div>
  );
};

export default VendorCard;
