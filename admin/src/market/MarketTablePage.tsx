import { Col, Container, Row } from "react-bootstrap";
import MarketTable from "./MarketTable";

const MarketTablePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <MarketTable />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketTablePage;
