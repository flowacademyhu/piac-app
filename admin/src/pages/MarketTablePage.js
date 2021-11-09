import { Col } from "react-bootstrap";
import MarketTable from "../components/MarketTable";
import Menu from "../components/Menu";

const MarketTablePage = () => {
  return (
    <>
      <Menu />
      <Col>
        <MarketTable />
      </Col>
    </>
  );
};

export default MarketTablePage;
