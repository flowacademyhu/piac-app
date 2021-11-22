import "./payment.css";
import cardIcon from "./card.svg";
import cashIcon from "./cash.svg";
import styled from "styled-components";

const VendorPayment = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Payment = ({ cardPayment }) => {
  const paymentText = (cardPayment) =>
    cardPayment ? "Bankkártyával is fizethetsz" : "Csak készpénzzel fizethetsz";

  return (
    <VendorPayment>
      <img
        className="payment-icon"
        src={cardPayment ? cardIcon : cashIcon}
        alt=""
      />
      <span className="payment-text">{paymentText(cardPayment)}</span>
    </VendorPayment>
  );
};

export default Payment;
