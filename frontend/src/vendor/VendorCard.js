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

const VendorCard = ({ vendor, vendorDesc, imageLogo }) => {
  return (
    <VendorCardContainer>
      <div
        className="vendorLogo"
        style={
          imageLogo
            ? {
                backgroundImage: `url(${imageLogo})`,
              }
            : {
                backgroundImage: `url(${defaultVendorImage})`,
              }
        }
      ></div>
      <div className="vendorInfo">
        <div className="vendorName">{vendor}</div>
        <div className="vendorDescription">{vendorDesc}</div>
      </div>
    </VendorCardContainer>
  );
};

export default VendorCard;
