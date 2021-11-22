import React, { useState, useLayoutEffect } from "react";
import "../../styles/CardList.css";
import { fetchVendors } from "../../api/Service";
import VendorCard from "../VendorCard";
import { Link } from "react-router-dom";
import SearchArea from "../../components/SearchArea";
import ErrorBody from "../../components/ErrorBody";
import sortByName from "../sort/sortByName";
import filteredArrayByKeyword from "../filter";
import CardList from "../../styles/CardListStyled";

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
      <CardList>
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
      </CardList>
    </>
  );
};

export default VendorCardList;