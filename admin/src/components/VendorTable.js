import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchVendors } from "./Service";

const VendorTable = () => {
  const [allVendors, setAllVendors] = useState([]);

  const getAllVendors = async () => {
    const result = await fetchVendors();
    setAllVendors(result);
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <div>
      <div align="center">
        <p class="font-weight-bold">ÁRUSOK</p>
        <Button style={{ marginTop: "20px", marginBottom: "20px" }}>
          ÚJ ÁRUS FELVÉTELE
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NÉV</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allVendors.map((vendor) => {
            return (
              <tr key={vendor.id}>
                <td>{vendor.name}</td>
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

export default VendorTable;
