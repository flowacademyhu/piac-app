import { Col } from "react-bootstrap";
import VendorTable from "../components/VendorTable";
import Menu from "../components/Menu";

const VendorTabePage = () => {
  return (
    <>
      <Menu />
      <Col>
        <VendorTable />
      </Col>
    </>
  );
};

export default VendorTabePage;
