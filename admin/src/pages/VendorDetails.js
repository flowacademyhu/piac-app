import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, Link, Navigate } from "react-router-dom";
import "@pathofdev/react-tag-input/build/index.css";
import axios from "axios";
import { fetchVendorById } from "./../components/Service";
import FormTextInput from "../components/FormTextInput";
import FormTextAreaInput from "../components/FormTextAreaInput";
import VendorCardPaymentCheckbox from "../components/VendorCardPaymentCheckbox";
import VendorProductsInput from "../components/VendorProductsInput";

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
      <FormTextAreaInput
        label="Árus hosszú leírása"
        dataObject={updatedVendor}
        dataObjectKey="introductionLong"
        setter={setUpdatedVendor}
        rows={5}
        maxLength={2500}
      />
      <VendorCardPaymentCheckbox
        dataObject={updatedVendor}
        setter={setUpdatedVendor}
      />
      <VendorProductsInput
        dataObject={updatedVendor}
        setter={setUpdatedVendor}
      />
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
