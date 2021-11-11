import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { logOut } from "./AuthService";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

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
        <Button
          variant="Light"
          onClick={() => {
            logOut();
            navigate("/");
            window.location.reload();
            alert("Sikeresen kijelentkeztél!");
          }}
        >
          Kijelentkezés
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
