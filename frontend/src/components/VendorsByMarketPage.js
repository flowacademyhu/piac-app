import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VendorCard from '../components/VendorCard';

const VendorsByMarketPage = () => {
  const { id } = useParams();
  const [hasError, setHasError] = useState(null);

  const [marketById, setMatketById] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/v1/api/market/${id}`
      );
      setMatketById(response.data);
    } catch (err) {
      setHasError(true);
    }
  }, [id]);

  console.log(marketById);
  return (
    <>
      <div className="marketHeader">
        <img
          style={{ height: '120px' }}
          className="marketLogo"
          src={marketById.profilePic}
          alt="logo"
        />
        <div
          div
          className="marketName"
          style={{ paddingLeft: '20px', fontSize: '40px' }}
        >
          {marketById.name}
        </div>
        <div
          div
          className="marketLocationAndDate"
          style={{ paddingLeft: '20px', fontSize: '20px' }}
        >
          <div>{marketById.place}</div>
          <div className="parallelDateAndHour">
            <div>{marketById.date}</div>
            <div className="startAndEndHour">
              {' ' + marketById.standAndEndHour}
            </div>
          </div>
        </div>
      </div>
      <div className="card-list" />
      <Footer />
    </>
  );
};

export default VendorsByMarketPage;
