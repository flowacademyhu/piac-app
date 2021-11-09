import { Container, Col, Navbar, Nav } from "react-bootstrap";
import VendorTable from "../components/VendorTable";
import { Link } from "react-router-dom";

const VendorTabePage = () => {
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
        <VendorTable />
      </Col>
    </>
  );
};

export default VendorTabePage;
