import React from 'react';
import '../styles/vendor-introduction.css';

const VendorIntroduction = ({ introductionLong }) => {
  return (
    <>
      {introductionLong && (
        <div className='introduction'>
          <h2>Bemutatkozás</h2>
          {introductionLong.split('\n').map((introduction) => (
            <p className='introduction-line'>{introduction}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default VendorIntroduction;
