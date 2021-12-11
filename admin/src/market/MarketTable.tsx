import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { fetchMarkets, deleteMarketById } from "components/Service";
import DeleteEntity from "components/DeleteEntity";
import { Link } from "react-router-dom";
import { Market } from "./Market";

const MarketTable = () => {
  const [allMarkets, setAllMarkets] = useState<Market[]>([]);

  const getAllMarkets = async () => {
    const result = await fetchMarkets();
    setAllMarkets(result);
  };

  useEffect(() => {
    getAllMarkets();
  }, []);

  const handleDeleteMarket = async (id: string) => {
    await deleteMarketById(id);
    getAllMarkets();
  };

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
          {allMarkets?.map((market) => {
            return (
              <tr key={market.id}>
                <td>{market.name}</td>
                <td>{market.place}</td>
                <td>{timeConverter(market.openingDate)}</td>
                <td>{timeConverter(market.closingDate)}</td>
                <td className="text-center">
                  <Link to={`/piac/szerkeszt/${market.id}`}>
                    <Button>Szerkeszt</Button>
                  </Link>
                </td>
                <td className="text-center">
                  <DeleteEntity
                    confirmationQuestion={`Biztosan kitörlöd a következő piacot? ${market.name}`}
                    handleDelete={handleDeleteMarket}
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
