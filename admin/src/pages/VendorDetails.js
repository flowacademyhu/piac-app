import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from "axios";
import { fetchVendorById } from "./../components/Service";
import FormTextInput from "../components/FormTextInput";
import FormTextAreaInput from "../components/FormTextAreaInput";

const VendorDetails = () => {
  const id = useParams().id;

  useEffect(() => {
    const fetchVendor = async (id) => {
      const response = await fetchVendorById(id);
      setUpdatedVendor(response);
    };
    if (id) {
      fetchVendor(id);
    }
  }, [id]);

  const [updatedVendor, setUpdatedVendor] = useState({});
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState(false);
  const title = id ? "Árus módosítása" : "Új árus hozzáadása";
  const submitButtonLabel = id ? "Módosítás" : "Hozzáadás";
  const vendorApi = "/v1/api/admin/vendor";
  const tokenConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };

  const addVendor = async (vendor) => {
    try {
      const response = await axios.post(vendorApi, updatedVendor, tokenConfig);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setHasError(true);
    }
  };

  const updateVendor = async (vendor, id) => {
    try {
      const response = await axios.put(
        vendorApi + "/" + id,
        updatedVendor,
        tokenConfig
      );
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <Form
      className="container mb-3"
      onSubmit={(e) => {
        if (id) {
          updateVendor(updatedVendor, id);
        } else {
          addVendor(updatedVendor);
        }
        e.preventDefault();
      }}
    >
      <h1 className="my-3">{title}</h1>
      <FormTextInput
        label="Árus neve"
        dataObject={updatedVendor}
        dataObjectKey="name"
        setter={setUpdatedVendor}
        required={true}
      />
      <FormTextInput
        label="Árus logója"
        dataObject={updatedVendor}
        dataObjectKey="profilePic"
        setter={setUpdatedVendor}
        required={true}
        type="url"
      />
      <FormTextAreaInput
        label="Árus rövid bemutatkozása"
        dataObject={updatedVendor}
        dataObjectKey="intro"
        setter={setUpdatedVendor}
        rows={2}
        maxLength={100}
      />
      <Form.Group className="mb-3" controlId="formVendorLongIntro">
        <Form.Label>Hosszú leírás</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Árus hosszú leírása..."
          required
          maxLength={2500}
          value={updatedVendor.introductionLong || ""}
          onChange={(e) =>
            setUpdatedVendor({
              ...updatedVendor,
              introductionLong: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCardPaymentCheckbox">
        <Form.Check
          type="checkbox"
          label="Bankkártyás fizetés"
          checked={updatedVendor.cardPayment || false}
          onChange={(e) =>
            setUpdatedVendor({
              ...updatedVendor,
              cardPayment: e.target.checked,
            })
          }
        />
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <p className="mb-2">Termékek</p>
          <ReactTagInput
            placeholder="Írd be a termék nevét és nyomj enter-t"
            tags={updatedVendor.products || []}
            onChange={(products) =>
              setUpdatedVendor({ ...updatedVendor, products: products })
            }
          />
        </Col>
      </Row>
      <FormTextInput
        label="Árus telefonszáma"
        dataObject={updatedVendor}
        dataObjectKey="phone"
        setter={setUpdatedVendor}
        type="tel"
      />
      <FormTextInput
        label="Árus e-mail címe"
        dataObject={updatedVendor}
        dataObjectKey="email"
        setter={setUpdatedVendor}
        type="email"
      />
      <FormTextInput
        label="Árus facebook linkje"
        dataObject={updatedVendor}
        dataObjectKey="facebook"
        setter={setUpdatedVendor}
      />
      <FormTextInput
        label="Árus instagram linkje"
        dataObject={updatedVendor}
        dataObjectKey="instagram"
        setter={setUpdatedVendor}
      />
      <FormTextInput
        label="Árus honlap címe"
        dataObject={updatedVendor}
        dataObjectKey="webSite"
        setter={setUpdatedVendor}
        type="url"
      />
      <Row>
        <Col>
          <Button variant="primary" type="submit" className="mr-3">
            {submitButtonLabel}
          </Button>
          <Link to="/arus">
            <Button variant="warning">Mégsem</Button>
          </Link>
        </Col>
      </Row>
      {hasError && (
        <p className="text-danger mt-3">Hiba történt a beküldés során!</p>
      )}
      {success && <Navigate to="/arus" />}
    </Form>
  );
};

export default VendorDetails;
