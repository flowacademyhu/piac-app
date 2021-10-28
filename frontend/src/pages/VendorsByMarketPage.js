import Footer from '../components/Footer';
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

  console.log(market);
  return (
    <>
      <HeaderWithMarket
        profilePic={market.profilePic}
        name={market.name}
        place={market.place}
        date={market.date}
      />
      {market.vendors && market.vendors.length > 0
? (
        <VendorListOfOneMarket market={market} />
      )
: (
        <VendorlistUploadInProgress />
      )}
      <Footer />
    </>
  );
};

export default VendorsByMarketPage;
