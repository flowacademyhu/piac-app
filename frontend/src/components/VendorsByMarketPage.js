import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderWithMarket from './HeaderWithMarket';
import VendorListOfOneMarket from './VendorListOfOneMarket';
import VendorlistUploadInProgress from './VendorlistUploadInProgress';
import { fetchMarketById } from './Service';

const VendorsByMarketPage = () => {
  const [marketById, setMarketById] = useState([]);

  const { id } = useParams();

  const getMarketById = async () => {
    const result = fetchMarketById(id);
    setMarketById(result);
  };

  useEffect(() => {
    getMarketById();
  }, [id]);

  return (
    <>
      <HeaderWithMarket
        profilePic={marketById.profilePic}
        name={marketById.name}
        place={marketById.place}
        date={marketById.date}
      />
      {marketById.vendors && marketById.vendors.length > 0
? (
        <VendorListOfOneMarket market={marketById} />
      )
: (
        <VendorlistUploadInProgress />
      )}
      <Footer />
    </>
  );
};

export default VendorsByMarketPage;
