import { useState } from "react";
import { Form } from "react-bootstrap";

const VendorDetails = ({ vendor }) => {
  const [updatedVendor, setUpdatedVendor] = useState(vendor ? vendor : {});
  return <Form className="container"></Form>;
};

export default VendorDetails;
