import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getToken, logOut } from "./AuthService";
import { useNavigate } from "react-router";
import jwtDecode from "jwt-decode";

const NavBar = () => {
  const navigate = useNavigate();

  var token = getToken();
  var decoded = jwtDecode(token);

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
        <div style={{ color: "white", fontSize: "14px" }}>
          Üdvözöljük : {decoded.sub}
        </div>
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
