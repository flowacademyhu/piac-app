import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketTablePage from "./pages/MarketTablePage";
import VendorTablePage from "./pages/VendorTablePage";
import Menu from "./components/Menu";
import VendorDetails from "./pages/VendorDetails";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/piac" element={<MarketTablePage />} />
          <Route exact path="/arus" element={<VendorTablePage />} />
          <Route exact path="/arus/uj" element={<VendorDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
