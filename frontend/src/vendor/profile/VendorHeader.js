import React from "react";
import "./VendorHeader.css";
import defaultVendorImage from "../defaultVendorImage.png";

const VendorHeader = (props) => {
  const { profilePic, name, intro } = props;

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
      <h2 className="vendor-name">{name}</h2>
      <p className="vendor-intro">{intro}</p>
    </header>
  );
};

export default VendorHeader;
