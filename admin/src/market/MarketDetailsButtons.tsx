import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface MarketDetailsButtonsProps {
  submitButtonLabel: string;
}

const MarketDetailsButtons = ({
  submitButtonLabel,
}: MarketDetailsButtonsProps) => {
  return (
    <Row>
      <Col>
        <Button variant="primary" type="submit" className="mr-3">
          {submitButtonLabel}
        </Button>
        <Link to="/piac">
          <Button variant="warning">Mégsem</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default MarketDetailsButtons;