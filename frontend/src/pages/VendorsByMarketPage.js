import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderWithMarket from "../components/HeaderWithMarket";
import VendorListOfOneMarket from "../components/VendorListOfOneMarket";
import VendorlistUploadInProgress from "../components/VendorlistUploadInProgress";
import { fetchMarketById } from "../components/Service";
import ErrorBody from "../components/ErrorBody";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const VendorsByMarketPage = () => {
  const [market, setMarket] = useState({});
  const [error, setError] = useState(null);

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

  const renderVendorList = () => {
    if (market.vendors && market.vendors.length > 0) {
      return <VendorListOfOneMarket market={market} />;
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
      <div className="marketHeader" />
      {error ? <ErrorBody error={error} /> : renderVendorList()}
      {error && <Redirect to="/" />}
    </>
  );
};

export default VendorsByMarketPage;
