import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/login.css";
import { useParams } from "react-router-dom";

const TokenExchange = () => {
  const tokenParam = useParams().tokenparameter;

  useEffect(() => {
    const axios = require("axios");

    async function getMail() {
      try {
        const response = await axios.get("/token/" + tokenParam);
        window.localStorage.setItem("token", response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <div>
      <div className="text">Token</div>
      <Form.Control className="form" placeHolder="Token" type="text" />
      <div className="login">
        <Button variant="outline-dark">Belépés</Button>
      </div>
    </div>
  );
};
export default TokenExchange;
