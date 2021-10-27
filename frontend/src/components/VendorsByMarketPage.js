import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderWithMarket from './HeaderWithMarket';
import VendorListOfOneMarket from './VendorListOfOneMarket';
import VendorlistUploadInProgress from './VendorlistUploadInProgress';

const VendorsByMarketPage = () => {
  const { id } = useParams();
  const [hasError, setHasError] = useState(null);

  const instance = axios.create({ baseURL: 'http://localhost:8081' });

  const [marketById, setMatketById] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await instance.get(`/v1/api/market/${id}`);
        setMatketById(response.data);
      } catch (err) {
        setHasError(true);
      }
    })();
  }, [id]);

  if (hasError) {
    console.warn('API request went wrong.');
  }

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
