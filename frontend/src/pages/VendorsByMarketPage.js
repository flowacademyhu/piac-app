import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderWithMarket from '../components/HeaderWithMarket';
import VendorListOfOneMarket from '../components/VendorListOfOneMarket';
import VendorlistUploadInProgress from '../components/VendorlistUploadInProgress';
import { fetchMarketById } from '../components/Service';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const VendorsByMarketPage = () => {
  const [market, setMarket] = useState({});
  const [error, hasError] = useState(false);
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

  const vendorList =
    market.vendors && market.vendors.length > 0 ? (
      <VendorListOfOneMarket market={market} />
    ) : (
      <VendorlistUploadInProgress />
    );

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
          {vendorList}
          <Footer />
        </>
      ) : (
        <div style={{ height: '90%' }} />
      )}
      {error && <Redirect to="/" />}
    </>
  );
};

export default VendorsByMarketPage;
