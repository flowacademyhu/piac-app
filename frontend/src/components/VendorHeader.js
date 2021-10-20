import React from 'react';
import '../styles/vendor-header.css';
import cashIcon from '../img/cash.svg';
import cardIcon from '../img/card.svg';

const VendorHeader = (props) => {
  const { logo, name, description, cash, card } = props;

  const paymentText = (cash, card) => {
    if (cash && card) {
      return 'Bankkártyás és készpénzes fizetés';
    } else if (cash) {
      return 'Csak készpénzes fizetés';
    } else if (card) {
      return 'Csak bankkártyás fizetés';
    }
  };

  return (
    <header className="vendor-header">
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
          {card && <img className="payment-icon" src={cardIcon} alt="" />}
          {cash && <img className="payment-icon" src={cashIcon} alt="" />}
          <span className="payment-text">{paymentText(cash, card)}</span>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;
