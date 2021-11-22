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

const PaymentIcon = styled.img`
  margin-right: 5px;
`;

const PaymentText = styled.span`
  margin-left: 5px;
`;

const Payment = ({ cardPayment }) => {
  const paymentText = (cardPayment) =>
    cardPayment ? "Bankkártyával is fizethetsz" : "Csak készpénzzel fizethetsz";

  return (
    <VendorPayment>
      <PaymentIcon src={cardPayment ? cardIcon : cashIcon} alt="" />
      <PaymentText>{paymentText(cardPayment)}</PaymentText>
    </VendorPayment>
  );
};

export default Payment;
