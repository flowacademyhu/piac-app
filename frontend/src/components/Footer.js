import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import VendorLogo from '../icons/navigation/vendor_dark.svg';
import VendorLogoHighlight from '../icons/navigation/vendor_primary.svg';
import MarketLogo from '../icons/navigation/market_dark.svg';
import MarketLogoHighlight from '../icons/navigation/market_primary.svg';

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FooterButton from './FooterButton';

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='container-fluid'>
        <Row className='footer-row'>
          <FooterButton requestParam='/' appelation='PIACOK' logo='market' />
          <FooterButton
            requestParam='/arusok'
            appelation='ÁRUSOK'
            logo='vendor'
          />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
