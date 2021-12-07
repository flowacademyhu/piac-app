import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "@pathofdev/react-tag-input/build/index.css";
import { addMarket, updateMarket } from "../components/Service";
import MarketDetailsButtons from "./MarketDetailsButtons";
import Time from "components/form/Time";
import { Market, MarketInput, MarketWithId } from "./Market";
import { useForm } from "react-hook-form";
import Textarea from "components/form/Textarea";
import Input from "components/form/Input";
import { useMutation } from "react-query";

const MarketDetails = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const { control, register, handleSubmit } = useForm<Market>();

  const [hasError, setHasError] = useState(false);
  const title = id ? "Piac módosítása" : "Új piac hozzáadása";
  const submitButtonLabel = id ? "Módosítás" : "Hozzáadás";

  const updateMarketMutation = useMutation(
    (market: MarketWithId) => updateMarket(market, market.id),
    {
      onError: () => {
        setHasError(true);
      },
    }
  );

  const addMarketMutation = useMutation(addMarket, {
    onSuccess: () => navigate("/piac"),
  });

  const submitForm = (market: MarketInput) => {
    if (id) {
      updateMarketMutation.mutate({
        ...market,
        id,
      });
    } else {
      addMarketMutation.mutate(market);
    }
  };

  return (
    <Form className="container mb-3" onSubmit={handleSubmit(submitForm)}>
      <h1 className="my-3">{title}</h1>
      <Input label="Piac neve" required={true} {...register("name")} />
      <Input
        label="Piac logója"
        required={true}
        type="url"
        {...register("profilePic")}
      />
      <Textarea
        label="Piac helyszíne"
        rows={2}
        maxLength={100}
        {...register("place")}
      />
      <Time control={control} label="Piac kezdete" name="openingDate" />
      <Time control={control} label="Piac zárása" name="closingDate" />

      <MarketDetailsButtons submitButtonLabel={submitButtonLabel} />
      {hasError && (
        <p className="text-danger mt-3">Hiba történt a beküldés során!</p>
      )}
    </Form>
  );
};

export default MarketDetails;
