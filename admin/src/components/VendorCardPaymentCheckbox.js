import { Form } from "react-bootstrap";

const VendorCardPaymentCheckbox = ({ dataObject, setter }) => {
  return (
    <Form.Group className="mb-3" controlId="formCardPaymentCheckbox">
      <Form.Check
        type="checkbox"
        label="Bankkártyás fizetés"
        checked={dataObject.cardPayment || false}
        onChange={(e) =>
          setter({
            ...dataObject,
            cardPayment: e.target.checked,
          })
        }
      />
    </Form.Group>
  );
};

export default VendorCardPaymentCheckbox;
