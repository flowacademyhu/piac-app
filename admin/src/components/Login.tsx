import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function getMail(emailType: string) {
    try {
      const response = await axios.post("/v1/api/login", {
        emailAddress: emailType,
      });
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Hiba történt a kérés során!");
    }
  }

  return (
    <Form
      onSubmit={(e) => {
        getMail(email);
        e.preventDefault();
      }}
    >
      <div className="text">E-mail</div>
      <Form.Control
        className="form"
        value={email}
        placeholder="E-mail"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="login">
        <Button variant="outline-dark" type="submit">
          Küldés
        </Button>
      </div>
      {success && (
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          E-mail küldése megtörtént! A csatolt linkre kattintva bejelentkezhet!
        </div>
      )}
    </Form>
  );
};
export default LoginPage;
