import React from "react";
import "./VendorIntroduction.css";

const VendorIntroduction = ({ introductionLong }) => {
  return (
    <>
      {introductionLong && (
        <div className="introduction vendor-padding">
          <h2>Bemutatkozás</h2>
          <p>{introductionLong}</p>
        </div>
      )}
    </>
  );
};

export default VendorIntroduction;
