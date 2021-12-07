import { useNavigate } from "react-router-dom";
import { addMarket } from "../components/Service";
import { MarketInput } from "./Market";
import { useMutation } from "react-query";
import MarketForm from "./MarketForm";

const NewMarket = () => {
  const navigate = useNavigate();

  const addMarketMutation = useMutation(addMarket, {
    onSuccess: () => navigate("/piac"),
  });

  const submitForm = (market: MarketInput) => {
    addMarketMutation.mutate(market);
  };

  return (
    <MarketForm
      title="Új piac hozzáadása"
      submitLabel="Hozzáadás"
      hasError={addMarketMutation.isError}
      errorMessage="Nem sikerült a piacot hozzáadni!"
      onSubmit={submitForm}
    />
  );
};

export default NewMarket;
