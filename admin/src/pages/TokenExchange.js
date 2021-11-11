import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/login.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { setToken } from "../components/AuthService";

const TokenExchange = () => {
  const { token } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const axios = require("axios");

    async function getMail() {
      try {
        const response = await axios.get("/v1/api/token/" + token);

        window.localStorage.setItem("token", response.data);
        navigate("/piac");
        window.location.reload();
      } catch (error) {
        alert("Hiba történt! Próbálja újra!");
      }
    }
    getMail();
  }, [token]);

  return (
    <div>
      <div className="text">Token</div>
      <Form.Control className="form" placeholder="Token" type="text" />
      <div className="login">
        <Button variant="outline-dark">Belépés</Button>
      </div>
    </div>
  );
};
export default TokenExchange;
