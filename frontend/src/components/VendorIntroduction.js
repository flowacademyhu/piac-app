import React from "react";
import "../styles/vendor-introduction.css";

const VendorIntroduction = ({ introductionLong }) => {
  return (
    <>
      {introductionLong && (
        <div className="introduction">
          <h2>Bemutatkozás</h2>
          <p>{introductionLong}</p>
        </div>
      )}
    </>
  );
};

export default VendorIntroduction;
