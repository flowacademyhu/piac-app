import { fetchMarketById, updateMarket } from "components/Service";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { MarketInput } from "./Market";
import MarketForm from "./MarketForm";

const EditMarket = () => {
  const navigate = useNavigate();

  const id = useParams().id ?? "";

  const {
    data: market,
    isLoading,
    isError,
  } = useQuery("market", () => fetchMarketById(id), {
    cacheTime: 0,
  });

  const editMarketMutation = useMutation(
    (market: MarketInput) => updateMarket(market, id),
    {
      onSuccess: () => navigate("/piac"),
    }
  );

  const submitForm = (market: MarketInput) => editMarketMutation.mutate(market);

  if (id && isLoading) {
    return <>Betöltés...</>;
  }

  if (isError) {
    return <>Hiba történt a piac betöltése során!</>;
  }

  return (
    <MarketForm
      title="Piac módosítása"
      submitLabel="Módosítás"
      hasError={editMarketMutation.isError}
      errorMessage="Nem sikerült a piacot módosítani!"
      onSubmit={submitForm}
      defaultValues={market}
    />
  );
};

export default EditMarket;
