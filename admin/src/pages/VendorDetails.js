import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const VendorDetails = () => {
  const vendor = useLocation().state || {};
  if (!vendor) {
    vendor = {
      name: "",
      intro: "",
      profilePic: "",
      cardPayment: false,
      email: "",
      facebook: "",
      instagram: "",
      introductionLong: "",
      phone: "",
      products: [],
      webSite: "",
    };
  }
  const [updatedVendor, setUpdatedVendor] = useState(vendor);
  const title = vendor.id ? "Árus módosítása" : "Új árus hozzáadása";
  const submitButtonLabel = vendor.id ? "Módosítás" : "Hozzáadás";
  return (
    <Form
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="my-3">{title}</h1>
      <Form.Group className="mb-3" controlId="formVendorName">
        <Form.Label>Árus neve</Form.Label>
        <Form.Control
          type="text"
          placeholder="Árus neve..."
          value={updatedVendor.name}
          required
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, name: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorLogo">
        <Form.Label>Árus logója</Form.Label>
        <Form.Control
          type="url"
          placeholder="Árus logója..."
          value={updatedVendor.profilePic || ""}
          required
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, profilePic: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorShortIntro">
        <Form.Label>Rövid bemutatkozás</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Árus rövid bemutatkozása..."
          required
          value={updatedVendor.intro}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, intro: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCardPaymentCheckbox">
        <Form.Check
          type="checkbox"
          label="Bankkártyás fizetés"
          checked={updatedVendor.cardPayment}
          onChange={(e) =>
            setUpdatedVendor({
              ...updatedVendor,
              cardPayment: e.target.checked,
            })
          }
        />
      </Form.Group>
      <Row>
        <Col>
          <Button variant="primary" type="submit" className="mr-3">
            {submitButtonLabel}
          </Button>
          <Link to="/arus">
            <Button variant="warning">Mégsem</Button>
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

export default VendorDetails;
