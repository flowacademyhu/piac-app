import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

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
      <Button variant="primary" type="submit">
        {submitButtonLabel}
      </Button>
    </Form>
  );
};

export default VendorDetails;
