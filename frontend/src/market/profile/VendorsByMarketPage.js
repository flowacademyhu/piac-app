import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderWithMarket from "./HeaderWithMarket";
import VendorListOfOneMarket from "./VendorListOfOneMarket";
import VendorlistUploadInProgress from "./VendorlistUploadInProgress";
import { fetchMarketById } from "../../api/Service";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SearchArea from "../../components/SearchArea";
import filteredArrayByKeyword from "../../vendor/filter";
import EmailContact from "../../components/EmailContact";
import styled from "styled-components";

const Intro = styled.h3`
  font-family: "Amatic SC", sans-serif;
  font-size: 40px;
  color: #705a4f;
  padding: 10px 0px 0px 20px;
  margin-bottom: 0;
`;

const MarketLoading = styled.div`
  background-color: #f7f5f2;
  width: 100%;
  position: relative;
  height: 100px;
`;

const VendorsByMarketPage = () => {
  const [market, setMarket] = useState({});
  const [error, hasError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const marketId = useParams().id;

  useEffect(() => {
    const fetchMarket = async (id) => {
      const response = await fetchMarketById(id);
      if (!response) {
        hasError(true);
      } else {
        setMarket(response);
      }
    };
    fetchMarket(marketId);
  }, [marketId]);

  const filteredVendorArray = filteredArrayByKeyword(
    market.vendors,
    searchTerm
  );

  const renderVendorList = () => {
    if (market.vendors && market.vendors.length > 0) {
      return (
        <>
          <SearchArea
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeHolder="Keress termékre vagy árusra..."
          />
          <VendorListOfOneMarket vendors={filteredVendorArray} />
          <EmailContact />
        </>
      );
    } else if (market.id) {
      return (
        <VendorlistUploadInProgress
          title="Szervezés alatt..."
          body="Itt fogod megtalálni az árusokat, akik ezen a piacon jelen lesznek."
        />
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

  return (
    <>
      {!error && market.id ? (
        <>
          <HeaderWithMarket
            profilePic={market.profilePic}
            marketName={market.name}
            marketLocation={market.place}
            marketOpeningDate={market.openingDate}
            marketClosingDate={market.closingDate}
          />
          <Intro>Kikkel találkozhatsz?</Intro>
        </>
      ) : (
        <div style={{ height: "90%" }} />
      )}
      {renderVendorList()}
      {error && <Redirect to="/" />}
    </>
  );
};

export default VendorsByMarketPage;
