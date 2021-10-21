import '../styles/VendorCard.css';

const body = document.body;
body.style.background = '#F7F5F2';

const VendorCard = ({ vendor, body, imageLogo }) => {
  return (
    <div className="vendorCard">
      <img className="vendorLogo" src={imageLogo} alt="logo" />
      <div div className="vendorName">
        {vendor}
      </div>
      <div div className="marketLocationAndDate">
        {body}
      </div>
    </div>
  );
};

export default VendorCard;
