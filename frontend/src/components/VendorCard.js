import '../styles/VendorCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const VendorCard = ({ vendor, vendorDesc, imageLogo }) => {
  return (
    <div className='vendorCard'>
      <div className='vendorLogo'></div>
      <div className='vendorName'>{vendor}</div>
      <div className='vendorDescription'>{vendorDesc}</div>
    </div>
  );
};

export default VendorCard;
