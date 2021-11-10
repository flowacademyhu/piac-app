import "../styles/payment.css";
import cashIcon from "../img/cash.svg";
import cardIcon from "../img/card.svg";

const Payment = ({ cardPayment }) => {
  const paymentText = (cardPayment) =>
    cardPayment ? "Bankkártyával is fizethetsz" : "Csak készpénzzel fizethetsz";

  return (
    <div className="vendor-payment">
      <img
        className="payment-icon"
        src={cardPayment ? cardIcon : cashIcon}
        alt=""
      />
      <span className="payment-text">{paymentText(cardPayment)}</span>
    </div>
  );
};

export default Payment;
