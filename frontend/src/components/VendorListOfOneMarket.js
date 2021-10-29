import { Link } from 'react-router-dom';
import VendorCard from '../components/VendorCard';

const VendorListOfOneMarket = ({ market }) => {
  return (
    <div className='card-list'>
      {market.vendors &&
        market.vendors.map((vendor) => {
          return (
            <div key={vendor.id}>
              <Link
                to={`/arusok/${vendor.id}`}
                style={{ textDecoration: 'none' }}
              >
                <VendorCard
                  imageLogo={vendor.profilePic}
                  vendor={vendor.name}
                  vendorDesc={vendor.intro}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default VendorListOfOneMarket;
