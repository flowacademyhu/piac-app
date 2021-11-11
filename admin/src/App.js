import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketTablePage from "./pages/MarketTablePage";
import VendorTablePage from "./pages/VendorTablePage";
import Menu from "./components/Menu";
import VendorDetails from "./pages/VendorDetails";
import LoginPage from "./components/Login";
import TokenExchange from "./pages/TokenExchange";

function App() {
  return window.localStorage.getItem("token") ? (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route
            exact
            path="/token/:tokenparameter"
            element={<TokenExchange />}
          />
          <Route exact path="/piac" element={<MarketTablePage />} />
          <Route exact path="/arus" element={<VendorTablePage />} />
          <Route exact path="/arus/uj" element={<VendorDetails />} />
          <Route exact path="/arus/szerkeszt" element={<VendorDetails />} />
        </Routes>
      </Router>
    </>
  ) : (
    <LoginPage />
  );
}

export default App;
