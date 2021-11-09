import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderWithMarket from "../components/HeaderWithMarket";
import VendorListOfOneMarket from "../components/VendorListOfOneMarket";
import VendorlistUploadInProgress from "../components/VendorlistUploadInProgress";
import { fetchMarketById } from "../components/Service";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const VendorsByMarketPage = () => {
  const [market, setMarket] = useState({});
  const [error, hasError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(market.vendors);
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

  const filteredVendorArray =
    searchTerm.length === 0
      ? market.vendors
      : market.vendors.filter(
          (vendor) =>
            vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.products
              .join(" ")
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            vendor.intro.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.introductionLong
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );

  const renderVendorList = () => {
    if (market.vendors && market.vendors.length > 0) {
      return (
        <>
          <div className="search-area">
            <input
              className="search-bar"
              placeholder="Keress termékre vagy árusra..."
              type="text"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <VendorListOfOneMarket vendors={filteredVendorArray} />
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
          <VendorlistUploadInProgress title="Betöltés..." />
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
          {renderVendorList()}
        </>
      ) : (
        <div style={{ height: "90%" }} />
      )}
      {error && <Redirect to="/" />}
    </>
  );
};

export default VendorsByMarketPage;
