import { Row, Col } from "react-bootstrap";
import ReactTagInput from "@pathofdev/react-tag-input";

const VendorProductsInput = ({ dataObject, setter }) => {
  return (
    <Row className="mb-3">
      <Col>
        <p className="mb-2">Termékek</p>
        <ReactTagInput
          placeholder="Írd be a termék nevét és nyomj enter-t"
          tags={dataObject.products || []}
          onChange={(products) => setter({ ...dataObject, products: products })}
        />
      </Col>
    </Row>
  );
};

export default VendorProductsInput;
