import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderWithMarket from '../components/HeaderWithMarket';
import VendorListOfOneMarket from '../components/VendorListOfOneMarket';
import VendorlistUploadInProgress from '../components/VendorlistUploadInProgress';
import { fetchMarketById } from '../components/Service';

const VendorsByMarketPage = () => {
  const [market, setMarket] = useState({});
  const marketId = useParams().id;

  useEffect(() => {
    const fetchMarket = async (id) => {
      const response = await fetchMarketById(id);
      setMarket(response);
    };
    fetchMarket(marketId);
  }, [marketId]);

  return (
    <>
      {market.id && (
        <HeaderWithMarket
          profilePic={market.profilePic}
          marketName={market.name}
          marketLocation={market.place}
          marketOpeningDate={market.openingDate}
          marketClosingDate={market.closingDate}
        />
      )}
      {market.vendors && market.vendors.length > 0 ? (
        <VendorListOfOneMarket market={market} />
      ) : (
        <>
          {!market.id ? <div className="marketLoading" /> : ''}
          <VendorlistUploadInProgress
            title={market.id ? 'Szervezés alatt...' : 'Betöltés...'}
            body={market.id ? 'Itt fogod megtalálni az árusokat,' : ' '}
            footer={market.id ? 'akik ezen a piacon jelen lesznek.' : ' '}
          />
        </>
      )}
    </>
  );
};

export default VendorsByMarketPage;
