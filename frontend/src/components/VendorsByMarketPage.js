import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VendorCardList from '../components/VendorCardList';

const VendorsByMarketPage = () => {
  const { id } = useParams();

  const [marketById, setMatketById] = useState([]);

  const getMarketById = async () => {
    const response = await axios.get('http://localhost:8081/v1/api/market/1');

    setMatketById(response.data);
    console.log(marketById);
  };

  useEffect(() => {
    getMarketById();
  }, [id]);

  return (
    <>
      <div className='marketHeader'>
        <img className='marketLogo' src={marketById.profilePic} alt='logo' />
        <div div className='marketName'>
          {marketById.name}
        </div>
        <div div className='marketLocationAndDate'>
          <div>{marketById.place}</div>
          <div className='parallelDateAndHour'>
            <div>{marketById.date}</div>
            <div className='startAndEndHour'>
              {' ' + marketById.standAndEndHour}
            </div>
          </div>
        </div>
      </div>
      <VendorCardList />
      <Footer />
    </>
  );
};

export default VendorsByMarketPage;
