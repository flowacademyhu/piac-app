import React from 'react';
import '../styles/vendor-introduction.css';
import { v4 } from 'uuid';


const VendorIntroduction = ({ introductionLong }) => {
  return (
    <>
      {introductionLong && (
        <div className='introduction'>
          <h2>Bemutatkozás</h2>
          {introductionLong.split('\n').map((introduction) => (
            <p key={v4()} className='introduction-line'>{introduction}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default VendorIntroduction;
