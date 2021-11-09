import React, { useState, useLayoutEffect } from "react";
import "../styles/MarketCardList.css";
import { fetchVendors } from "./Service";
import VendorCard from "./VendorCard";
import { Link } from "react-router-dom";
import SearchArea from "./SearchArea";

const VendorCardList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [vendors, setVendors] = useState([]);

  const getVendors = async () => {
    const result = await fetchVendors();
    setVendors(result);
  };

  useLayoutEffect(() => {
    getVendors();
  }, []);

  const lower = (obj) => {
    return obj.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredVendorArray =
    searchTerm.length === 0
      ? vendors
      : vendors.filter(
          (vendor) =>
            lower(vendor.name) ||
            lower(vendor.products.join(" ")) ||
            lower(vendor.intro) ||
            lower(vendor.introductionLong)
        );

  return (
    <>
      <SearchArea
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeHolder="Keress termékre vagy árusra..."
      />
      <div className="card-list">
        {filteredVendorArray.map((vendor) => {
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
    </>
  );
};

export default VendorCardList;
