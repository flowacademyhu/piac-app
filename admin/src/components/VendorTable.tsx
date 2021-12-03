import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import { fetchVendors, deleteVendorById } from "./Service";
import DeleteEntity from "./DeleteEntity";
import Vendor from "../vendor/Vendor";

const VendorTable = () => {
  const [allVendors, setAllVendors] = useState<Vendor[]>([]);

  const getAllVendors = async () => {
    const result = await fetchVendors();
    if (result) {
      setAllVendors(result);
    }
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  const handleDeleteVendor = async (id: string) => {
    await deleteVendorById(id);
    getAllVendors();
  };

  return (
    <div>
      <div className="text-center">
        <p className="font-weight-bold">ÁRUSOK</p>
        <Link to="/arus/uj">
          <Button className="my-3">ÚJ ÁRUS FELVÉTELE</Button>
        </Link>
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
                <td className="text-center">
                  <Link to={`/arus/szerkeszt/${vendor.id}`}>
                    <Button>Szerkeszt</Button>
                  </Link>
                </td>
                <td className="text-center">
                  <DeleteEntity
                    confirmationQuestion={`Biztosan kitörlöd a következő árust? ${vendor.name}`}
                    handleDelete={handleDeleteVendor}
                    ID={vendor.id}
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

export default VendorTable;
