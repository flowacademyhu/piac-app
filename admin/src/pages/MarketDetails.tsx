import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "@pathofdev/react-tag-input/build/index.css";
import {
  fetchMarketById,
  addVendor,
  updateMarket,
} from "../components/Service";
import FormTextInput from "../components/FormTextInput";
import FormTextAreaInput from "../components/FormTextAreaInput";
import MarketDetailsButtons from "../components/MarketDetailsButtons";
import TimeInput from "../components/TimeInput";

const MarketDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  const fetchMarket = async (id: string) => {
    const response = await fetchMarketById(id);
    setUpdatedMarket(response);
  };

  useEffect(() => {
    if (id) {
      fetchMarketById(id);
    }
  }, [id]);

  useEffect(() => {
    if (success) {
      navigate("/piac");
    }
  }, [success, navigate]);

  const [updatedMarket, setUpdatedMarket] = useState({});
  const [hasError, setHasError] = useState(false);
  const title = id ? "Piac módosítása" : "Új piac hozzáadása";
  const submitButtonLabel = id ? "Módosítás" : "Hozzáadás";

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (id) {
      updateMarket(updatedMarket, id, setSuccess, setHasError);
    } else {
      addVendor(updatedMarket, setSuccess, setHasError);
    }
    e.preventDefault();
  };

  return (
    <Form className="container mb-3" onSubmit={submitForm}>
      <h1 className="my-3">{title}</h1>
      <FormTextInput
        label="Piac neve"
        dataObject={updatedMarket}
        dataObjectKey="name"
        setter={setUpdatedMarket}
        required={true}
      />
      <FormTextInput
        label="Piac logója"
        dataObject={updatedMarket}
        dataObjectKey="profilePic"
        setter={setUpdatedMarket}
        required={true}
        type="url"
      />
      <FormTextAreaInput
        label="Piac helyszíne"
        dataObject={updatedMarket}
        dataObjectKey="place"
        setter={setUpdatedMarket}
        rows={2}
        maxLength={100}
      />
      <TimeInput
        label="Piac kezdete"
        dataObject={updatedMarket}
        dataObjectKey="openingDate"
        setter={setUpdatedMarket}
      />
      <TimeInput
        label="Piac zárása"
        dataObject={updatedMarket}
        dataObjectKey="closingDate"
        setter={setUpdatedMarket}
      />

      <MarketDetailsButtons submitButtonLabel={submitButtonLabel} />
      {hasError && (
        <p className="text-danger mt-3">Hiba történt a beküldés során!</p>
      )}
    </Form>
  );
};

export default MarketDetails;
