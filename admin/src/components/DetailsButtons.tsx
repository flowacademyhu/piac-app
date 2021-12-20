import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface DetailsButtonsProps {
  submitButtonLabel: string;
  to: string;
}

const DetailsButtons = ({ submitButtonLabel, to }: DetailsButtonsProps) => {
  return (
    <Row>
      <Col>
        <Button variant="primary" type="submit" className="mr-3">
          {submitButtonLabel}
        </Button>
        <Link to={to}>
          <Button variant="warning">Mégsem</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default DetailsButtons;
