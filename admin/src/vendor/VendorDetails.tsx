import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { fetchVendorById, addVendor, updateVendor } from "components/Service";
import FormTextInput from "components/FormTextInput";
import FormTextAreaInput from "components/FormTextAreaInput";
import VendorCardPaymentCheckbox from "./VendorCardPaymentCheckbox";
import VendorProductsInput from "./VendorProductsInput";
import VendorDetailsButtons from "./VendorDetailsButtons";

const VendorDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  const fetchVendor = async (id: string) => {
    const response = await fetchVendorById(id);
    setUpdatedVendor(response);
  };

  useEffect(() => {
    if (id) {
      fetchVendor(id);
    }
  }, [id]);

  useEffect(() => {
    if (success) {
      navigate("/arus");
    }
  }, [success, navigate]);

  const [updatedVendor, setUpdatedVendor] = useState<any>({});
  const [hasError, setHasError] = useState(false);
  const title = id ? "Árus módosítása" : "Új árus hozzáadása";
  const submitButtonLabel = id ? "Módosítás" : "Hozzáadás";

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (id) {
      updateVendor(updatedVendor, id, setSuccess, setHasError);
    } else {
      addVendor(updatedVendor, setSuccess, setHasError);
    }
    e.preventDefault();
  };

  return (
    <Form className="container mb-3" onSubmit={submitForm}>
      <h1 className="my-3">{title}</h1>
      <FormTextInput
        label="Árus neve"
        dataObject={updatedVendor}
        dataObjectKey="name"
        setter={setUpdatedVendor}
        required={true}
      />
      <FormTextInput
        label="Árus logója"
        dataObject={updatedVendor}
        dataObjectKey="profilePic"
        setter={setUpdatedVendor}
        required={true}
        type="url"
      />
      <FormTextAreaInput
        label="Árus rövid bemutatkozása"
        dataObject={updatedVendor}
        dataObjectKey="intro"
        setter={setUpdatedVendor}
        rows={2}
        maxLength={100}
      />
      <FormTextAreaInput
        label="Árus hosszú leírása"
        dataObject={updatedVendor}
        dataObjectKey="introductionLong"
        setter={setUpdatedVendor}
        rows={5}
        maxLength={2500}
      />
      <VendorCardPaymentCheckbox
        dataObject={updatedVendor}
        setter={setUpdatedVendor}
      />
      <VendorProductsInput
        dataObject={updatedVendor}
        setter={setUpdatedVendor}
      />
      <FormTextInput
        label="Árus telefonszáma"
        dataObject={updatedVendor}
        dataObjectKey="phone"
        setter={setUpdatedVendor}
        type="tel"
      />
      <FormTextInput
        label="Árus e-mail címe"
        dataObject={updatedVendor}
        dataObjectKey="email"
        setter={setUpdatedVendor}
        type="email"
      />
      <FormTextInput
        label="Árus facebook linkje"
        dataObject={updatedVendor}
        dataObjectKey="facebook"
        setter={setUpdatedVendor}
      />
      <FormTextInput
        label="Árus instagram linkje"
        dataObject={updatedVendor}
        dataObjectKey="instagram"
        setter={setUpdatedVendor}
      />
      <FormTextInput
        label="Árus honlap címe"
        dataObject={updatedVendor}
        dataObjectKey="webSite"
        setter={setUpdatedVendor}
        type="url"
      />
      <VendorDetailsButtons submitButtonLabel={submitButtonLabel} />
      {hasError && (
        <p className="text-danger mt-3">Hiba történt a beküldés során!</p>
      )}
    </Form>
  );
};

export default VendorDetails;
