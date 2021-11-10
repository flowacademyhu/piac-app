import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

const LoginPage = () => {
  const [token, setToken] = useState([]);

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
        <Button variant="outline-dark">Küldés</Button>
      </div>
    </div>
  );
};
export default LoginPage;
