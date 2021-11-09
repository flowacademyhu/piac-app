import "./App.css";
import MarketTable from "./MarketTable";
import VendorTable from "./VendorTable";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MarketTable />
      <VendorTable />
    </div>
  );
}

export default App;
