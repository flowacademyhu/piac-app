import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketTablePage from "./pages/MarketTablePage";
import VendorTablePage from "./pages/VendorTablePage";
import Menu from "./components/Menu";
import VendorDetails from "./pages/VendorDetails";
import LoginPage from "./components/Login";
import TokenExchange from "./pages/TokenExchange";

function App() {
  return (
    <Router>
      {window.localStorage.getItem("token") ? (
        <>
          <Menu />
          <Routes>
            <Route index path="/piac" element={<MarketTablePage />} />
            <Route path="/arus" element={<VendorTablePage />} />
            <Route path="/arus/uj" element={<VendorDetails />} />
            <Route path="/arus/szerkeszt" element={<VendorDetails />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/token/:token" element={<TokenExchange />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
