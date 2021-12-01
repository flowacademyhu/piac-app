import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderWithMarket from "./HeaderWithMarket";
import VendorListOfOneMarket from "./VendorListOfOneMarket";
import VendorlistUploadInProgress from "./VendorlistUploadInProgress";
import { fetchMarketById } from "../../api/Service";
import { Redirect } from "react-router";
import SearchArea from "../../components/SearchArea";
import filteredArrayByKeyword from "../../vendor/filter";
import { useQuery } from "react-query";
import EmailContact from "../../components/EmailContact";
import styled from "styled-components";
import IdPrameter from "../../types/IdParameter";

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

interface UrlParam {
  id: string;
}

const VendorsByMarketPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const marketId = useParams<IdPrameter>().id;

  const { data: market, isLoading } = useQuery<any>(["market", marketId], () =>
    fetchMarketById(marketId)
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
          <VendorListOfOneMarket
            vendors={filteredArrayByKeyword(market.vendors, searchTerm)}
          />
          <EmailContact />
        </>
      );
    } else if (market.id) {
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

  return (
    <>
      {!isLoading && market ? (
        <>
          <HeaderWithMarket
            profilePic={market.profilePic}
            marketName={market.name}
            marketLocation={market.place}
            marketOpeningDate={market.openingDate}
            marketClosingDate={market.closingDate}
          />
          <Intro>Kikkel találkozhatsz?</Intro>
          {renderVendorList()}
        </>
      ) : (
        <div style={{ height: "90%" }} />
      )}
      {!isLoading && !market && <Redirect to="/" />}
    </>
  );
};

export default VendorsByMarketPage;
