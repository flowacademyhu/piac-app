import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/login.css";

const TokenExchange = () => {
  const [token, setToken] = useState([]);

  const axios = require("axios");

  return (
    <div>
      <div className="text">Token</div>
      <Form.Control
        className="form"
        placeHolder="Token"
        type="text"
        onChange={(e) => setToken(e.target.value)}
      />
      <div className="login">
        <Button variant="outline-dark">Küldés</Button>
      </div>
    </div>
  );
};
export default TokenExchange;
