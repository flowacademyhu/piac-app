import { Link } from "react-router-dom";
import VendorCard from "../../vendor/VendorCard";
import sortByName from "../../vendor/sort/sortByName";
import CardList from "../../styles/CardListStyled";

const VendorListOfOneMarket = ({ vendors }) => {
  vendors.sort(sortByName);

  return (
    <CardList>
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
    </CardList>
  );
};

export default VendorListOfOneMarket;
