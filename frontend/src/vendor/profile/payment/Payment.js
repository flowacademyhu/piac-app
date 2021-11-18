import "../../../styles/payment.css";
import cardIcon from "./card.svg";
import cashIcon from "./cash.svg";

const Payment = ({ cardPayment }) => {
  const paymentText = (cardPayment) =>
    cardPayment ? "Bankkártyával is fizethetsz" : "Csak készpénzzel fizethetsz";

  return (
    <div className="vendor-payment vendor-padding">
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
