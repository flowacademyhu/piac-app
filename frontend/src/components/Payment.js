import "../styles/payment.css";
import cashIcon from "../icons/payment/cash.svg";
import cardIcon from "../icons/payment/card.svg";

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
