import { useState } from "react";

const VendorDetails = ({ vendor }) => {
  const [updatedVendor, setUpdatedVendor] = useState(vendor ? vendor : {});
  return <div></div>;
};

export default VendorDetails;
