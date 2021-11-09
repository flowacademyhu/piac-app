import { useState } from "react";
import { Form } from "react-bootstrap";

const VendorDetails = ({ vendor }) => {
  const [updatedVendor, setUpdatedVendor] = useState(vendor ? vendor : {});
  const title = vendor ? "Árus módosítása" : "Új árus hozzáadása";
  return (
    <Form className="container">
      <h1 className="my-3">{title}</h1>
    </Form>
  );
};

export default VendorDetails;
