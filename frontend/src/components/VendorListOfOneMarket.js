import { Link } from 'react-router-dom';
import VendorCard from '../components/VendorCard';

const VendorListOfOneMarket = ({ market }) => {
  const sortedList = market.vendors.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return (
    <div className='card-list'>
      {market.vendors &&
        sortedList.map((vendor) => {
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
