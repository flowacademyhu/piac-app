import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import VendorLogo from '../icons/navigation/vendor_dark.svg';
import VendorLogoHighlight from '../icons/navigation/vendor_primary.svg';
import MarketLogo from '../icons/navigation/market_dark.svg';
import MarketLogoHighlight from '../icons/navigation/market_primary.svg';

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      <Container className="container-fluid">
        <Row>
          <Col style={{ cursor: 'pointer' }}>
            <Link className="footer-link" to="/market">
              <img
                src={
                  location.pathname === '/market'
                    ? MarketLogoHighlight
                    : MarketLogo
                }
                alt="Logo"
              />
              <div id="market-label">PIACOK</div>
            </Link>
          </Col>
          <Col style={{ cursor: 'pointer' }}>
            <Link className="footer-link" to="/vendor">
              <img
                src={
                  location.pathname === '/vendor'
                    ? VendorLogoHighlight
                    : VendorLogo
                }
                alt="Logo"
              />
              <div id="vendor-label">ÁRUSOK</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
