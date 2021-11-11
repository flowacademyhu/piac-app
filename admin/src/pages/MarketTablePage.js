import { Col, Container, Row } from "react-bootstrap";
import MarketTable from "../components/MarketTable";
import { Navigate } from "react-router-dom";

const MarketTablePage = () => {
  return window.localStorage.getItem("token") ? (
    <Container>
      <Row>
        <Col>
          <MarketTable />
        </Col>
      </Row>
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default MarketTablePage;
