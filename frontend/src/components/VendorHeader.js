import React from "react";
import "../styles/vendor-header.css";
import defaultVendorImage from "../img/defaultVendorImage.png";
import Payment from "./Payment";

const VendorHeader = (props) => {
  const { profilePic, name, intro, cardPayment } = props;

  return (
    <header className="vendor-profile-header">
      <div
        className="vendor-logo-container"
        style={
          profilePic
            ? {
                backgroundImage: `url(${profilePic})`,
              }
            : {
                backgroundImage: `url(${defaultVendorImage})`,
              }
        }
      ></div>
      <div className="vendor-header-data">
        <h2 className="vendor-name">{name}</h2>
        <p className="vendor-intro">{intro}</p>
        <Payment cardPayment={cardPayment} />
      </div>
    </header>
  );
};

export default VendorHeader;
