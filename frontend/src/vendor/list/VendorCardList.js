import React, { useState } from "react";
import "../../styles/CardList.css";
import { fetchVendors } from "../../api/Service";
import VendorCard from "../VendorCard";
import { Link } from "react-router-dom";
import SearchArea from "../../components/SearchArea";
import ErrorBody from "../../components/ErrorBody";
import sortByName from "../sort/sortByName";
import filteredArrayByKeyword from "../filter";
import { useQuery } from "react-query";

const VendorCardList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: vendors,
    isLoading,
    isError,
  } = useQuery("vendors", fetchVendors);

  !isLoading && vendors.sort(sortByName);

  return (
    <>
      <SearchArea
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeHolder="Keress termékre vagy árusra..."
      />
      <div className="card-list">
        {isError ? (
          <ErrorBody />
        ) : (
          !isLoading &&
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
