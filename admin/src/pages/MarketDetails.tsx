import React, { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "@pathofdev/react-tag-input/build/index.css";
import {
  fetchMarketById,
  addMarket,
  updateMarket,
} from "../components/Service";
import FormInput from "../components/FormInput";
import FormTextAreaInput from "../components/FormTextAreaInput";
import MarketDetailsButtons from "../components/MarketDetailsButtons";
import TimeInput from "../components/TimeInput";
import { Market } from "market/Market";

const MarketDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { register, reset, handleSubmit } = useForm<Market>();

  const submitForm = (data: Market) => {
    console.log(data);
    return;

    /*try {
      if (id) {
        updateMarket(data, id);
      } else {
        addMarket(data);
      }
      setSuccess(true);
    } catch (e) {
      setHasError(true);
    }*/
  };

  const fetchMarket = useCallback(
    async (id: string) => {
      const response = await fetchMarketById(id);
      if (response) {
        reset(response);
      }
    },
    [reset]
  );

  useEffect(() => {
    if (id) {
      fetchMarket(id);
    }
  }, [fetchMarket, id]);

  useEffect(() => {
    if (success) {
      navigate("/piac");
    }
  }, [success, navigate]);

  const title = id ? "Piac módosítása" : "Új piac hozzáadása";
  const submitButtonLabel = id ? "Módosítás" : "Hozzáadás";

  return (
    <Form className="container mb-3" onSubmit={handleSubmit(submitForm)}>
      <h1 className="my-3">{title}</h1>
      <FormInput label="Piac neve" required {...register("name")} />
      <FormInput
        label="Piac logója"
        type="url"
        required
        {...register("profilePic")}
      />
      <FormTextAreaInput label="Piac helyszíne" {...register("place")} />
      <TimeInput label="Piac kezdete" {...register("openingDate")} />
      <TimeInput label="Piac zárása" {...register("closingDate")} />

      <MarketDetailsButtons submitButtonLabel={submitButtonLabel} />
      {hasError && (
        <p className="text-danger mt-3">Hiba történt a beküldés során!</p>
      )}
    </Form>
  );
};

export default MarketDetails;
