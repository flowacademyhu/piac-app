import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketTablePage from "./pages/MarketTablePage";
import VendorTablePage from "./pages/VendorTablePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/piac" element={<MarketTablePage />} />
          <Route exact path="/arus" element={<VendorTablePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
