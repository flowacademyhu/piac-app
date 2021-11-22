import React from "react";
// import "./VendorIntroduction.css";
import styled from "styled-components";

const Introduction = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  h2 {
    font-family: "Amatic SC", sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    white-space: pre-wrap;
  }
`;

const VendorIntroduction = ({ introductionLong }) => {
  return (
    <>
      {introductionLong && (
        <Introduction>
          <h2>Bemutatkozás</h2>
          <p>{introductionLong}</p>
        </Introduction>
      )}
    </>
  );
};

export default VendorIntroduction;
