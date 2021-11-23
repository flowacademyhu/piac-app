import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderWithMarket from "./HeaderWithMarket";
import VendorListOfOneMarket from "./VendorListOfOneMarket";
import VendorlistUploadInProgress from "./VendorlistUploadInProgress";
import { fetchMarketById } from "../../api/Service";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SearchArea from "../../components/SearchArea";
import filteredArrayByKeyword from "../../vendor/filter";
import { useQuery } from "react-query";

const VendorsByMarketPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const marketId = useParams().id;

  const {
    data: market,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["market", marketId], () => fetchMarketById(marketId));

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
          <div className="marketLoading" />
          <VendorlistUploadInProgress />
        </>
      );
    }
  };

  return (
    <>
      {!isLoading && !isError && market.id ? (
        <>
          <HeaderWithMarket
            profilePic={market.profilePic}
            marketName={market.name}
            marketLocation={market.place}
            marketOpeningDate={market.openingDate}
            marketClosingDate={market.closingDate}
          />
          <div className="intro">Kikkel találkozhatsz?</div>
        </>
      ) : (
        <div style={{ height: "90%" }} />
      )}
      {!isLoading && renderVendorList()}
      {!isSuccess && <Redirect to="/" />}
    </>
  );
};

export default VendorsByMarketPage;
