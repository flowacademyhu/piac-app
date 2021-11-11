import { Col, Container, Row } from "react-bootstrap";
import VendorTable from "../components/VendorTable";
import { Navigate } from "react-router-dom";

const VendotTablePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <VendorTable />
        </Col>
      </Row>
    </Container>
  );
};

export default VendotTablePage;
