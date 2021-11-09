import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
