import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut, getUsername } from "./AuthService";
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
        <div style={{ color: "white", fontSize: "14px", paddingRight: "20px" }}>
          Üdvözöljük : {getUsername()}
        </div>
        <Button
          variant="light"
          onClick={() => {
            logOut();
            navigate("/");
            window.location.reload();
          }}
        >
          Kijelentkezés
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
