import { Col, Container, Row } from "react-bootstrap";
import VendorTable from "./VendorTable";

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
