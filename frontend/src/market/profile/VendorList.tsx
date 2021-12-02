import { useState } from "react";
import VendorListOfOneMarket from "./VendorListOfOneMarket";
import VendorlistUploadInProgress from "./VendorlistUploadInProgress";
import SearchArea from "../../components/SearchArea";
import filteredArrayByKeyword from "../../vendor/filter";
import EmailContact from "../../components/EmailContact";
import styled from "styled-components";
import Market from "market/Market";

const MarketLoading = styled.div`
  background-color: #f7f5f2;
  width: 100%;
  position: relative;
  height: 100px;
`;

interface VendorListProps {
  market: Market;
}

const VendorList = ({ market }: VendorListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (market && market.vendors && market.vendors.length > 0) {
    return (
      <>
        <SearchArea
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeHolder="Keress termékre vagy árusra..."
        />
        <VendorListOfOneMarket
          vendors={filteredArrayByKeyword(market.vendors, searchTerm)}
        />
        <EmailContact />
      </>
    );
  } else if (market && market.id) {
    return (
      <>
        <VendorlistUploadInProgress
          title="Szervezés alatt..."
          body="Itt fogod megtalálni az árusokat, akik ezen a piacon jelen lesznek."
        />
        <EmailContact />
      </>
    );
  } else {
    return (
      <>
        <MarketLoading />
        <VendorlistUploadInProgress />
      </>
    );
  }
};

export default VendorList;
