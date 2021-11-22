import React from "react";
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

const VendorName = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

const VendorIntro = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  margin: 0;
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
      <VendorName>{name}</VendorName>
      <VendorIntro>{intro}</VendorIntro>
    </VendorProfileHeader>
  );
};

export default VendorHeader;
