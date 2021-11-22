import React from "react";
import "./VendorHeader.css";
import defaultVendorImage from "../defaultVendorImage.png";
import styled from "styled-components";

const VendorProfileHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const VendorHeader = (props) => {
  const { profilePic, name, intro } = props;

  return (
    <VendorProfileHeader>
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
    </VendorProfileHeader>
  );
};

export default VendorHeader;
