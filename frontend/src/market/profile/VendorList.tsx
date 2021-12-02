import { useState } from "react";
import VendorListOfOneMarket from "./VendorListOfOneMarket";
import VendorListUploadInProgress from "./VendorListUploadInProgress";
import SearchArea from "../../components/SearchArea";
import filteredArrayByKeyword from "../../vendor/filter";
import EmailContact from "../../components/EmailContact";
import styled from "styled-components";
import { VendorSummary } from "vendor/Vendor";

const MarketLoading = styled.div`
  background-color: #f7f5f2;
  width: 100%;
  position: relative;
  height: 100px;
`;

interface VendorListProps {
  vendors: VendorSummary[];
}

const VendorList = ({ vendors }: VendorListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (vendors.length > 0) {
    return (
      <>
        <SearchArea
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeHolder="Keress termékre vagy árusra..."
        />
        <VendorListOfOneMarket
          vendors={filteredArrayByKeyword(vendors, searchTerm)}
        />
        <EmailContact />
      </>
    );
  } else {
    return (
      <>
        <VendorListUploadInProgress
          title="Szervezés alatt..."
          body="Itt fogod megtalálni az árusokat, akik ezen a piacon jelen lesznek."
        />
        <EmailContact />
      </>
    );
  }
};

export default VendorList;
