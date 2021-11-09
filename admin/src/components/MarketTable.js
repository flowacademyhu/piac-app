import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMarkets } from "./Service";

const MarketTable = () => {
  const [allMarkets, setAllMarkets] = useState([]);

  const getAllMarkets = async () => {
    const result = await fetchMarkets();
    setAllMarkets(result);
  };

  useEffect(() => {
    getAllMarkets();
  }, []);

  const timeConverter = (epochSeconds) => {
    const dateFormatter = {
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
      <div align="center">
        <p class="font-weight-bold">PIACOK</p>
        <Button style={{ marginTop: "20px", marginBottom: "20px" }}>
          ÚJ PIAC FELVÉTELE
        </Button>
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
          {allMarkets.map((market) => {
            return (
              <tr key={market.id}>
                <td>{market.name}</td>
                <td>{market.place}</td>
                <td>{timeConverter(market.openingDate)}</td>
                <td>{timeConverter(market.closingDate)}</td>
                <td>
                  <Button onClick={() => console.log("Szerkesztés")}>
                    Szerkeszt
                  </Button>
                </td>
                <td>
                  <Button>Töröl</Button>
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
