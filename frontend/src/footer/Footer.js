import "./Footer.css";
import { Container, Row } from "react-bootstrap";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="container-fluid">
        <Row className="footer-row">
          <FooterButton requestParam="/" appelation="PIACOK" logo="market" />
          <FooterButton
            requestParam="/arusok"
            appelation="ÁRUSOK"
            logo="vendor"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
