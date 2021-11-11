import { Col, Container, Row } from "react-bootstrap";
import VendorTable from "../components/VendorTable";
import { Navigate } from "react-router-dom";

const VendotTablePage = () => {
  return window.localStorage.getItem("token") ? (
    <Container>
      <Row>
        <Col>
          <VendorTable />
        </Col>
      </Row>
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default VendotTablePage;
