import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "@pathofdev/react-tag-input/build/index.css";
import {
  fetchVendorById,
  addVendor,
  updateVendor,
} from "../components/Service";
import FormTextInput from "../components/FormInput";
import FormTextAreaInput from "../components/FormTextAreaInput";
import VendorCardPaymentCheckbox from "../components/VendorCardPaymentCheckbox";
import VendorProductsInput from "../components/VendorProductsInput";
import VendorDetailsButtons from "../components/VendorDetailsButtons";
import { Vendor } from "vendor/Vendor";
import { useForm } from "react-hook-form";

const VendorDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  const fetchVendor = async (id: string) => {
    const response = await fetchVendorById(id);
    if (response) {
      setUpdatedVendor(response);
    }
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

  const [updatedVendor, setUpdatedVendor] = useState<Vendor>({
    name: "",
  });
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

  const { register } = useForm();

  return (
    <Form className="container mb-3" onSubmit={submitForm}>
      <h1 className="my-3">{title}</h1>
      <FormTextInput label="Árus neve" required {...register("name")} />
      <FormTextInput
        label="Árus logója"
        type="url"
        required
        {...register("profilePic")}
      />
      <FormTextAreaInput
        label="Árus rövid bemutatkozása"
        {...register("intro")}
      />
      <FormTextAreaInput
        label="Árus hosszú leírása"
        maxLength={2500}
        rows={5}
        {...register("introductionLong")}
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
        type="tel"
        {...register("phone")}
      />
      <FormTextInput
        label="Árus e-mail címe"
        type="email"
        {...register("email")}
      />
      <FormTextInput label="Árus facebook linkje" {...register("facebook")} />
      <FormTextInput label="Árus instagram linkje" {...register("instagram")} />
      <FormTextInput
        label="Árus honlap címe"
        type="url"
        {...register("webSite")}
      />
      <VendorDetailsButtons submitButtonLabel={submitButtonLabel} />
      {hasError && (
        <p className="text-danger mt-3">Hiba történt a beküldés során!</p>
      )}
    </Form>
  );
};

export default VendorDetails;
