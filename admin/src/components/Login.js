import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const axios = require("axios");

  async function getMail(email) {
    try {
      await axios.post("/v1/api/login", {
        emailAddress: email,
      });
    } catch (error) {
      console.error("Hiba történt a kérés során!");
    }
  }

  return (
    <Form
      onSubmit={(e) => {
        getMail(email);
        alert(
          "E-mail küldése megtörtént! A csatolt linkre kattintva bejelentkezhet!"
        );
        e.preventDefault();
      }}
    >
      <div className="text">E-mail</div>
      <Form.Control
        className="form"
        value={email}
        placeHolder="E-mail"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="login">
        <Button variant="outline-dark" type="submit">
          Küldés
        </Button>
      </div>
    </Form>
  );
};
export default LoginPage;
