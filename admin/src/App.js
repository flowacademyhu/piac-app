import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketTable from "./components/MarketTable";
import VendorTable from "./components/VendorTable";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/piac" element={<MarketTable />} />
          <Route exact path="/arus" element={<VendorTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
