// import "./VendorCard.css";
import defaultVendorImage from "./defaultVendorImage.png";
import styled from "styled-components";

const VendorCardContainer = styled.div`
  display: flex;
  flex-direction: row wrap;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding: 10px;
  background-color: #fffdfc;
  width: 100%;
  position: relative;
`;

const VendorLogo = styled.div`
  height: 100px;
  min-width: 100px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const VendorInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
`;

const VendorName = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  padding-left: 10px;
  padding-bottom: 5px;
  white-space: normal;
  word-break: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

const VendorDescription = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  overflow: hidden;
  padding-left: 10px;
  width: 100%;
  white-space: normal;
  word-break: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
`;

const VendorCard = ({ vendor, vendorDesc, imageLogo }) => {
  return (
    <VendorCardContainer>
      <VendorLogo
        style={
          imageLogo
            ? {
                backgroundImage: `url(${imageLogo})`,
              }
            : {
                backgroundImage: `url(${defaultVendorImage})`,
              }
        }
      ></VendorLogo>
      <VendorInfo>
        <VendorName>{vendor}</VendorName>
        <VendorDescription>{vendorDesc}</VendorDescription>
      </VendorInfo>
    </VendorCardContainer>
  );
};

export default VendorCard;
