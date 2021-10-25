import React from 'react';
import '../styles/vendor-header.css';
import cashIcon from '../img/cash.svg';
import cardIcon from '../img/card.svg';

const VendorHeader = (props) => {
  const { logo, name, description, cash, cardPayment } = props;

  const paymentText = (cardPayment) =>
    cardPayment ? 'Bankkártyával is fizethetsz' : 'Csak készpénzzel fizethetsz';

  return (
    <header className="vendor-profile-header">
      <div className="vendor-logo-container">
        <div
          className="circle"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      </div>
      <div className="vendor-header-data">
        <h2 className="vendor-name">{name}</h2>
        <p className="vendor-description-short">{description}</p>
        <div className="vendor-payment">
          <img
            className="payment-icon"
            src={cardPayment ? cardIcon : cashIcon}
            alt=""
          />
          <span className="payment-text">{paymentText(cardPayment)}</span>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;
