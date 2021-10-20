import React from 'react';
import '../styles/vendor-introduction.css';

const VendorIntroduction = ({ introduction }) => {
  return (
    <>
      {introduction && (
        <div className="introduction">
          <h2>Bemutatkozás</h2>
          <p>{introduction}</p>
        </div>
      )}
    </>
  );
};

export default VendorIntroduction;
