import React, { useState, useLayoutEffect } from "react";
import "../styles/Search.css";
import "../styles/MarketCardList.css";
import { fetchVendors } from "./Service";
import VendorCard from "./VendorCard";
import { Link } from "react-router-dom";

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

  const filteredVendorArray =
    searchTerm.length === 0
      ? vendors
      : vendors.filter(
          (vendor) =>
            vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.products
              .join(" ")
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            vendor.intro.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.introductionLong
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );

  console.log(vendors);

  return (
    <>
      <div className="search-area">
        <input
          className="search-bar"
          placeholder="Keress termékre vagy árusra..."
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
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
