import React, { useState, useLayoutEffect } from "react";
import "../../styles/CardList.css";
import { fetchVendors } from "../../api/Service";
import VendorCard from "../VendorCard";
import { Link } from "react-router-dom";
import SearchArea from "../../components/SearchArea";
import ErrorBody from "../../components/ErrorBody";
import sortByName from "../../functions/sortByName";
import filteredArrayByKeyword from "../../functions/filteredArrayByKeyword";

const VendorCardList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null);

  const getVendors = async () => {
    const result = await fetchVendors();
    setVendors(result);
  };

  useLayoutEffect(() => {
    getVendors().catch((err) => setError(err.message));
  }, []);

  vendors.sort(sortByName);

  return (
    <>
      <SearchArea
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeHolder="Keress termékre vagy árusra..."
      />
      <div className="card-list">
        {error ? (
          <ErrorBody error={error} />
        ) : (
          filteredArrayByKeyword(vendors, searchTerm).map((vendor) => {
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
          })
        )}
      </div>
    </>
  );
};

export default VendorCardList;
