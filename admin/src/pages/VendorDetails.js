import { useState } from "react";
import { Form } from "react-bootstrap";

const VendorDetails = ({ vendor }) => {
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
  return (
    <Form className="container">
      <h1 className="my-3">{title}</h1>
    </Form>
  );
};

export default VendorDetails;
