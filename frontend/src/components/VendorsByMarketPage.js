import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import VendorCard from '../components/VendorCard';

const imageLogo =
  'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/128194749_3718400788226892_2631429779387369230_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ZRn8DPeEpMgAX_e0Aw-&_nc_ht=scontent-vie1-1.xx&oh=b25f36537a474921e7c1bf971c277d3c&oe=6195513B';

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

  if (hasError) {
    console.warn('API request went wrong.');
  }

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
      <div className='card-list'>
        {marketById &&
          marketById.vendors &&
          marketById.vendors.map((vendor) => {
            return (
              <div key={vendor.id}>
                <Link
                  to={`/arusok/${vendor.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <VendorCard
                    imageLogo={imageLogo}
                    vendor={vendor.name}
                    vendorDesc={vendor.intro}
                  />
                </Link>
              </div>
            );
          })}
      </div>

      <Footer />
    </>
  );
};

export default VendorsByMarketPage;
