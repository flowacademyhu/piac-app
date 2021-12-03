import { Button, Table } from "react-bootstrap";
import { fetchMarkets, deleteMarketById } from "components/Service";
import DeleteEntity from "components/DeleteEntity";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

const timeConverter = (epochSeconds: number) => {
  const dateFormatter: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat("hu-HU", dateFormatter).format(
    new Date(epochSeconds * 1000)
  );
};

const MarketTable = () => {
  const { data: markets } = useQuery("markets", fetchMarkets);

  const queryClient = useQueryClient();

  const deleteMarketMutation = useMutation(deleteMarketById, {
    onSuccess: () => {
      queryClient.invalidateQueries("markets");
    },
  });

  return (
    <div>
      <div className="text-center">
        <p className="font-weight-bold">PIACOK</p>
        <Link to="/piac/uj">
          <Button style={{ marginTop: "20px", marginBottom: "20px" }}>
            ÚJ PIAC FELVÉTELE
          </Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NÉV</th>
            <th>HELYSZÍN</th>
            <th>KEZDÉS</th>
            <th>BEFEJEZÉS</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {markets?.map((market) => {
            return (
              <tr key={market.id}>
                <td>{market.name}</td>
                <td>{market.place}</td>
                <td>{timeConverter(market.openingDate)}</td>
                <td>{timeConverter(market.closingDate)}</td>
                <td className="text-center">
                  <Button>Szerkeszt</Button>
                </td>
                <td className="text-center">
                  <DeleteEntity
                    confirmationQuestion={`Biztosan kitörlöd a következő piacot? ${market.name}`}
                    handleDelete={deleteMarketMutation.mutate}
                    ID={market.id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MarketTable;
