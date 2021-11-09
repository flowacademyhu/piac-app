import { Container, Col, Navbar, Nav } from "react-bootstrap";
import MarketTable from "../components/MarketTable";
import { Link } from "react-router-dom";

const MarketTablePage = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/piac" className="nav-link">
              Piacok
            </Link>
            <Link to="/arus" className="nav-link">
              Árusok
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Col>
        <MarketTable />
      </Col>
    </>
  );
};

export default MarketTablePage;
