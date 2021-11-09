import MarketTable from "../components/MarketTable";
import VendorTable from "../components/VendorTable";
import "../styles/Tables.css"

const TablesPage = () => {
  return (
    <div className="tables">
      <MarketTable />
      <VendorTable />
    </div>
  );
};

export default TablesPage;
