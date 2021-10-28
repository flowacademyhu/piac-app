import { Link } from 'react-router-dom';
import VendorCard from '../components/VendorCard';

const imageLogo =
  'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/128194749_3718400788226892_2631429779387369230_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ZRn8DPeEpMgAX_e0Aw-&_nc_ht=scontent-vie1-1.xx&oh=b25f36537a474921e7c1bf971c277d3c&oe=6195513B';

const VendorListOfOneMarket = ({ market }) => {
  return (
    <div className='card-list'>
      {market.vendors &&
        market.vendors.map((vendor, i) => {
          return (
            <div key={i}>
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
  );
};

export default VendorListOfOneMarket;
