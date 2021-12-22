import { fetchMarketById, updateMarket } from "components/Service";
import { useMutation, useQuery } from "react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { MarketInput } from "./Market";
import MarketForm from "./MarketForm";

const EditMarket = () => {
  const navigate = useNavigate();

  const id = useParams().id ?? "";

  const marketQuery = useQuery("market", () => fetchMarketById(id), {
    cacheTime: 0,
  });

  const editMarketMutation = useMutation(
    (market: MarketInput) => updateMarket(market, id),
    {
      onSuccess: () => navigate("/piac"),
    }
  );

  const submitForm = (market: MarketInput) => editMarketMutation.mutate(market);

  if (!id) {
    return <Navigate to="/piac" replace />;
  }

  const { isLoading, isIdle, isError } = marketQuery;

  if (isLoading || isIdle) {
    return <>Betöltés...</>;
  }

  if (isError) {
    return <>Hiba történt a piac betöltése során!</>;
  }

  const market = marketQuery.data;

  const defaultValues: MarketInput = {
    ...market,
    vendors: market.vendors.map((vendor) => vendor.id),
  };

  return (
    <MarketForm
      title="Piac módosítása"
      submitLabel="Módosítás"
      hasError={editMarketMutation.isError}
      errorMessage="Nem sikerült a piacot módosítani!"
      onSubmit={submitForm}
      defaultValues={defaultValues}
    />
  );
};

export default EditMarket;
