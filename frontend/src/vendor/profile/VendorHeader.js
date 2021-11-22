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

const VendorLogoContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const VendorHeader = (props) => {
  const { profilePic, name, intro } = props;

  return (
    <VendorProfileHeader>
      <VendorLogoContainer
        style={
          profilePic
            ? {
                backgroundImage: `url(${profilePic})`,
              }
            : {
                backgroundImage: `url(${defaultVendorImage})`,
              }
        }
      ></VendorLogoContainer>
      <h2 className="vendor-name">{name}</h2>
      <p className="vendor-intro">{intro}</p>
    </VendorProfileHeader>
  );
};

export default VendorHeader;
