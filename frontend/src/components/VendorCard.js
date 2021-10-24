import '../styles/VendorCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const VendorCard = ({ vendor, vendorDesc, imageLogo }) => {
  return (
    <div className='vendorCard'>
      <img className='vendorLogo' src={imageLogo} alt='logo' />
      <div div className='vendorName'>
        {vendor}
      </div>
      <div div className='marketLocationAndDate'>
        {vendorDesc}
      </div>
    </div>
  );
};

export default VendorCard;
