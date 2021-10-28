import './Footer.css';
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';
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
            <Link className="footer-link" to="/">
              <img
                className="footer-logo"
                src={
                  location.pathname === '/' ? MarketLogoHighlight : MarketLogo
                }
                alt="Icon"
              />
              <div
                className={
                  location.pathname === '/'
                    ? 'footer-label active'
                    : 'footer-label'
                }
              >
                PIACOK
              </div>
            </Link>
          </Col>
          <Col style={{ cursor: 'pointer' }}>
            <Link className="footer-link" to="/arusok">
              <img
                className="footer-logo"
                src={
                  location.pathname === '/arusok'
                    ? VendorLogoHighlight
                    : VendorLogo
                }
                alt="Icon"
              />
              <div
                className={
                  location.pathname === '/arusok'
                    ? 'footer-label active'
                    : 'footer-label'
                }
              >
                ÁRUSOK
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
