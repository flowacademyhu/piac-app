import React, { useState, useLayoutEffect } from "react";
import "../styles/MarketCardList.css";
import { fetchVendors } from "./Service";
import VendorCard from "./VendorCard";
import { Link } from "react-router-dom";
import ErrorBody from "./ErrorBody";

const VendorCardList = () => {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null);

  const getVendors = async () => {
    const result = await fetchVendors();
    setVendors(result);
  };

  useLayoutEffect(() => {
    getVendors().catch((err) => setError(err.message));
  }, []);

  return (
    <div className="card-list">
      {error ? (
        <ErrorBody error={error} />
      ) : (
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
        })
      )}
    </div>
  );
};

export default VendorCardList;
