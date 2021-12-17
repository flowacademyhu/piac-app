import { useNavigate } from "react-router-dom";
import { addVendor } from "../components/Service";
import { VendorInput } from "./Vendor";
import { useMutation } from "react-query";
import VendorForm from "./VendorForm";

const NewVendor = () => {
  const navigate = useNavigate();

  const addVendorMutation = useMutation(addVendor, {
    onSuccess: () => navigate("/arus"),
  });

  const submitForm = (vendor: VendorInput) => {
    addVendorMutation.mutate(vendor);
  };

  return (
    <VendorForm
      title="Új árus hozzáadása"
      submitLabel="Hozzáadás"
      hasError={addVendorMutation.isError}
      errorMessage="Nem sikerült az árust hozzáadni!"
      onSubmit={submitForm}
    />
  );
};

export default NewVendor;
