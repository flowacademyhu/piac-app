import React from "react";
import "../styles/vendor-header.css";
import cashIcon from "../img/cash.svg";
import cardIcon from "../img/card.svg";

const VendorHeader = (props) => {
  const { profilePic, name, intro, cardPayment } = props;

  const paymentText = (cardPayment) =>
    cardPayment ? "Bankkártyával is fizethetsz" : "Csak készpénzzel fizethetsz";

  return (
    <header className="vendor-profile-header">
      <div
        className="vendor-logo-container"
        style={
          profilePic
            ? {
                backgroundImage: `url(${profilePic})`
              }
            : {}
        }
      ></div>
      <div className="vendor-header-data">
        <h2 className="vendor-name">{name}</h2>
        <p className="vendor-intro">{intro}</p>
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
