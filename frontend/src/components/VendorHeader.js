import React from 'react';
import '../styles/vendor-header.css';
import cashIcon from '../img/cash.svg';
import cardIcon from '../img/card.svg';

const VendorHeader = (props) => {
  const { logo, name, description, cash, cardPayment } = props;

  const paymentText = (cash, cardPayment) => {
    if (cash && cardPayment) {
      return 'Bankkártyás és készpénzes fizetés';
    } else if (cash) {
      return 'Csak készpénzes fizetés';
    } else if (cardPayment) {
      return 'Csak bankkártyás fizetés';
    }
  };

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
          {cardPayment && (
            <img className="payment-icon" src={cardIcon} alt="" />
          )}
          {cash && <img className="payment-icon" src={cashIcon} alt="" />}
          <span className="payment-text">{paymentText(cash, cardPayment)}</span>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;
