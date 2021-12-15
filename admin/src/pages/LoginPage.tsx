import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../components/login.css";
import { useMutation } from "react-query";

async function login(email: string) {
  const response = await axios.post("/v1/api/login", { emailAddress: email });
  return response.data;
}

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");

  const mutation = useMutation(login);

  return (
    <Form
      onSubmit={(e) => {
        mutation.mutate(email);
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
      {mutation.isSuccess && (
        <div className="text-center text-success pt-3">
          E-mail küldése megtörtént! A csatolt linkre kattintva bejelentkezhet!
        </div>
      )}
      {mutation.isError && (
        <div className="text-center text-danger pt-3">
          Hiba történt az e-mail kiküldése során. Az e-mail nem került
          kiküldésre.
        </div>
      )}
    </Form>
  );
};

export default LoginPage;
