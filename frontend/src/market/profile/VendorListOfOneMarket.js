import { Link } from "react-router-dom";
import VendorCard from "../../vendor/VendorCard";
import sortByName from "../../functions/sortByName";

const VendorListOfOneMarket = ({ vendors }) => {
  vendors.sort(sortByName);

  return (
    <div className="card-list">
      {vendors &&
        vendors.map((vendor) => {
          return (
            <div key={vendor.id}>
              <Link
                to={`/arusok/${vendor.id}`}
                style={{ textDecoration: "none" }}
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
