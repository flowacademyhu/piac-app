import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderWithMarket from './HeaderWithMarket';
import VendorListOfOneMarket from './VendorListOfOneMarket';
import VendorlistUploadInProgress from './VendorlistUploadInProgress';
import { fetchMarketById, marketById } from './Service';

const VendorsByMarketPage = () => {
  const { id } = useParams();
  const [hasError, setHasError] = useState(null);

  const instance = axios.create({ baseURL: '/' });

  const getMarketById = async (id) => {
    const result = await fetchMarketById(id);
    setMarketById(result);
  };

  const [marketById, setMarketById] = useState([]);

  useEffect(() => {
    fetchMarketById();
  }, [id]);

  return (
    <>
      <HeaderWithMarket
        profilePic={marketById.profilePic}
        name={marketById.name}
        place={marketById.place}
        date={marketById.date}
      />
      {marketById.vendors && marketById.vendors.length > 0 ? (
        <VendorListOfOneMarket market={marketById} />
      ) : (
        <VendorlistUploadInProgress />
      )}
      <Footer />
    </>
  );
};

export default VendorsByMarketPage;
