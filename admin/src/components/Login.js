import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

const LoginPage = () => {
  const [token, setToken] = useState([]);

  const axios = require("axios");

  async function getMail() {
    try {
      const response = await axios.get("/v1/api/login");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="text">E-mail</div>
      <Form.Control
        className="form"
        placeHolder="E-mail"
        type="text"
        onChange={(e) => setToken(e.target.value)}
      />
      <div className="login">
        <Button variant="outline-dark">Belépés</Button>
      </div>
    </div>
  );
};
export default LoginPage;
