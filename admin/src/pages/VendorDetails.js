import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useLocation, Link, Navigate } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from "axios";

const VendorDetails = () => {
  const vendor = useLocation().state || {};
  const [updatedVendor, setUpdatedVendor] = useState(vendor);
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState(false);
  const title = vendor.id ? "Árus módosítása" : "Új árus hozzáadása";
  const submitButtonLabel = vendor.id ? "Módosítás" : "Hozzáadás";
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

  return (
    <Form
      className="container mb-3"
      onSubmit={(e) => {
        addVendor(updatedVendor);
        e.preventDefault();
      }}
    >
      <h1 className="my-3">{title}</h1>
      <Form.Group className="mb-3" controlId="formVendorName">
        <Form.Label>Árus neve</Form.Label>
        <Form.Control
          type="text"
          placeholder="Árus neve..."
          value={updatedVendor.name || ""}
          required
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, name: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorLogo">
        <Form.Label>Árus logója</Form.Label>
        <Form.Control
          type="url"
          placeholder="Árus logója..."
          value={updatedVendor.profilePic || ""}
          required
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, profilePic: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorShortIntro">
        <Form.Label>Rövid bemutatkozás</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Árus rövid bemutatkozása..."
          required
          value={updatedVendor.intro || ""}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, intro: e.target.value })
          }
        />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formVendorTel">
        <Form.Label>Árus telefonszáma</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Árus telefonszáma..."
          value={updatedVendor.phone || ""}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, phone: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorEmail">
        <Form.Label>Árus e-mail címe</Form.Label>
        <Form.Control
          type="email"
          placeholder="Árus e-mail címe..."
          value={updatedVendor.email || ""}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, email: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorFacebook">
        <Form.Label>Árus facebook linkje</Form.Label>
        <Form.Control
          type="text"
          placeholder="Árus facebook linkje..."
          value={updatedVendor.facebook || ""}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, facebook: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorInstagram">
        <Form.Label>Árus instagram linkje</Form.Label>
        <Form.Control
          type="text"
          placeholder="Árus instagram linkje..."
          value={updatedVendor.instagram || ""}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, instagram: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formVendorWeb">
        <Form.Label>Árus honlap címe</Form.Label>
        <Form.Control
          type="url"
          placeholder="Árus honlap címe..."
          value={updatedVendor.webSite || ""}
          onChange={(e) =>
            setUpdatedVendor({ ...updatedVendor, webSite: e.target.value })
          }
        />
      </Form.Group>
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
